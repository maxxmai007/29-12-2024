import React, { useState, useRef, useEffect } from 'react';
import { cn } from '../../utils/cn';
import { Search } from 'lucide-react';

interface Option {
  value: string;
  label: string;
}

interface ComboBoxProps {
  options: readonly Option[];
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  error?: string;
  label?: string;
}

export function ComboBox({
  options,
  value,
  onChange,
  placeholder = 'Select an option',
  error,
  label
}: ComboBoxProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState('');
  const [highlightedIndex, setHighlightedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const listboxRef = useRef<HTMLUListElement>(null);

  const selectedOption = options.find(opt => opt.value === value);
  
  const filteredOptions = options.filter(option =>
    option.label.toLowerCase().includes(search.toLowerCase())
  );

  useEffect(() => {
    if (!isOpen) {
      setSearch('');
      setHighlightedIndex(0);
    }
  }, [isOpen]);

  useEffect(() => {
    setHighlightedIndex(0);
  }, [search]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault();
        setHighlightedIndex(i => Math.min(i + 1, filteredOptions.length - 1));
        break;
      case 'ArrowUp':
        e.preventDefault();
        setHighlightedIndex(i => Math.max(i - 1, 0));
        break;
      case 'Enter':
        e.preventDefault();
        if (isOpen && filteredOptions[highlightedIndex]) {
          onChange(filteredOptions[highlightedIndex].value);
          setIsOpen(false);
        } else {
          setIsOpen(true);
        }
        break;
      case 'Escape':
        setIsOpen(false);
        break;
    }
  };

  return (
    <div className="relative">
      {label && (
        <label className="block text-sm font-medium text-gold-500/80 mb-2">
          {label}
        </label>
      )}
      
      <div className="relative">
        <input
          ref={inputRef}
          type="text"
          value={isOpen ? search : selectedOption?.label || ''}
          onChange={e => {
            setSearch(e.target.value);
            setIsOpen(true);
          }}
          onFocus={() => setIsOpen(true)}
          onKeyDown={handleKeyDown}
          placeholder={placeholder}
          className={cn(
            "w-full px-4 py-3 bg-dark-800 border rounded-lg outline-none transition-all duration-200",
            "text-white placeholder:text-gold-500/40",
            "border-gold-500/20 focus:border-gold-500/40",
            "pr-10",
            error && "border-red-500/50 focus:border-red-500/70"
          )}
        />
        <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gold-500/40" />
      </div>

      {error && (
        <p className="mt-2 text-sm text-red-500">{error}</p>
      )}

      {isOpen && (
        <>
          <div 
            className="fixed inset-0 z-10" 
            onClick={() => setIsOpen(false)}
          />
          <ul
            ref={listboxRef}
            className="absolute z-20 w-full mt-1 max-h-60 overflow-auto rounded-lg border border-gold-500/20 bg-dark-800 shadow-lg"
            role="listbox"
          >
            {filteredOptions.length === 0 ? (
              <li className="px-4 py-2 text-gold-500/40">No results found</li>
            ) : (
              filteredOptions.map((option, index) => (
                <li
                  key={option.value}
                  role="option"
                  aria-selected={value === option.value}
                  className={cn(
                    "px-4 py-2 cursor-pointer transition-colors",
                    "hover:bg-gold-500/10",
                    index === highlightedIndex && "bg-gold-500/10",
                    value === option.value ? "text-gold-500" : "text-white"
                  )}
                  onClick={() => {
                    onChange(option.value);
                    setIsOpen(false);
                  }}
                >
                  {option.label}
                </li>
              ))
            )}
          </ul>
        </>
      )}
    </div>
  );
}