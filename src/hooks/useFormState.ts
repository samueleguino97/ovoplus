import { useCallback, useState } from "react";

export default function useFormState<T = object>(initialState?: T) {
  const [formState, setFormState] = useState<T>(initialState);

  const changeFormField = useCallback(
    (field) => (value) => setFormState({ ...initialState, [field]: value }),
    []
  );
  const changeEventFormField = useCallback(
    (field) => (inputEvent) =>
      setFormState({ ...initialState, [field]: inputEvent.target.value }),
    []
  );
  const resetForm = useCallback(() => setFormState(initialState), [
    initialState,
  ]);
  return { formState, changeEventFormField, changeFormField, resetForm };
}
