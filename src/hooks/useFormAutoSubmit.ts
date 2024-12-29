import { useEffect, useRef } from 'react';
import { ZodSchema } from 'zod';

interface UseFormAutoSubmitProps<T> {
  values: T;
  schema: ZodSchema;
  onValidSubmit: (data: T) => void;
  debounceMs?: number;
}

export function useFormAutoSubmit<T>({
  values,
  schema,
  onValidSubmit,
  debounceMs = 500
}: UseFormAutoSubmitProps<T>) {
  const timeoutRef = useRef<NodeJS.Timeout>();
  const previousValuesRef = useRef<T>();

  useEffect(() => {
    // Skip if values haven't changed
    if (JSON.stringify(values) === JSON.stringify(previousValuesRef.current)) {
      return;
    }

    // Update previous values
    previousValuesRef.current = values;

    // Clear existing timeout
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    // Set new timeout
    timeoutRef.current = setTimeout(() => {
      const result = schema.safeParse(values);
      if (result.success) {
        onValidSubmit(values);
      }
    }, debounceMs);

    // Cleanup
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [values, schema, onValidSubmit, debounceMs]);
}