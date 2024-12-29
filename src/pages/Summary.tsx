import React from 'react';
import { useNavigate } from 'react-router-dom';
import { User, Wallet, Target } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { BackButton } from '../components/ui/BackButton';
import { Logo } from '../components/layout/Logo';
import { SummaryCard } from '../components/summary/SummaryCard';
import { useProfileStore } from '../store/useProfileStore';
import { useRecommendationsStore } from '../store/useRecommendationsStore';
import { formatCurrency, formatGoal } from '../utils/formatters';
import { generateCreditCardRecommendations } from '../utils/openai';

export function Summary() {
  const navigate = useNavigate();
  const { basicDetails, spendingHabits, goals } = useProfileStore();
  const { setRecommendations, setLoading, setError } = useRecommendationsStore();

  React.useEffect(() => {
    if (!basicDetails) {
      navigate('/profile');
    }
  }, [basicDetails, navigate]);

  const handleEdit = (section: string) => {
    switch (section) {
      case 'basic':
        navigate('/profile');
        break;
      case 'spending':
        navigate('/profile/spending');
        break;
      case 'goals':
        navigate('/profile/goals');
        break;
    }
  };

  const handleGetRecommendations = async () => {
    try {
      setLoading(true);
      setError(null);
      
      if (!basicDetails || !spendingHabits || !goals.length) {
        throw new Error('Please complete your profile before getting recommendations');
      }

      const recommendations = await generateCreditCardRecommendations({
        basicDetails,
        spendingHabits,
        goals,
      });
      
      setRecommendations(recommendations);
      navigate('/recommendations');
    } catch (error) {
      setError(error instanceof Error ? error.message : 'Failed to generate recommendations');
      console.error('Error getting recommendations:', error);
    } finally {
      setLoading(false);
    }
  };

  if (!basicDetails || !spendingHabits) {
    return null;
  }

  return (
    <div className="min-h-screen bg-dark-900">
      <div className="max-w-3xl mx-auto px-4 py-8">
        <BackButton className="mb-8" />
        
        <div className="text-center mb-12">
          <Logo className="mx-auto" />
          <h2 className="mt-6 text-3xl font-display tracking-tight text-white">
            Profile Summary
          </h2>
          <p className="mt-2 text-sm text-gold-500/80">
            Review your information before getting recommendations
          </p>
        </div>

        <div className="space-y-6">
          <SummaryCard
            title="Basic Details"
            icon={<User className="w-5 h-5 text-gold-500" />}
            onEdit={() => handleEdit('basic')}
          >
            <dl className="grid grid-cols-2 gap-4">
              <div>
                <dt className="text-sm text-gold-500/60">Monthly Income</dt>
                <dd className="text-white">{formatCurrency(basicDetails.income)}</dd>
              </div>
              <div>
                <dt className="text-sm text-gold-500/60">Occupation</dt>
                <dd className="text-white">{basicDetails.occupation}</dd>
              </div>
              <div>
                <dt className="text-sm text-gold-500/60">City</dt>
                <dd className="text-white">{basicDetails.city}</dd>
              </div>
            </dl>
          </SummaryCard>

          <SummaryCard
            title="Spending Habits"
            icon={<Wallet className="w-5 h-5 text-gold-500" />}
            onEdit={() => handleEdit('spending')}
          >
            <dl className="grid grid-cols-2 gap-4">
              {Object.entries(spendingHabits).map(([category, amount]) => (
                <div key={category}>
                  <dt className="text-sm text-gold-500/60 capitalize">{category}</dt>
                  <dd className="text-white">{formatCurrency(amount)}</dd>
                </div>
              ))}
            </dl>
          </SummaryCard>

          <SummaryCard
            title="Financial Goals"
            icon={<Target className="w-5 h-5 text-gold-500" />}
            onEdit={() => handleEdit('goals')}
          >
            <div className="flex flex-wrap gap-2">
              {goals.map((goal) => (
                <span
                  key={goal}
                  className="px-3 py-1 bg-gold-500/10 text-gold-500 rounded-full text-sm"
                >
                  {formatGoal(goal)}
                </span>
              ))}
            </div>
          </SummaryCard>
        </div>

        <div className="mt-12">
          <Button
            onClick={handleGetRecommendations}
            className="w-full"
            size="lg"
          >
            Get Recommendations
          </Button>
        </div>
      </div>
    </div>
  );
}