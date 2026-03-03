import { ChangeEvent, memo, useEffect, useMemo, useRef, useState } from "react";
import { Subject } from "rxjs";
import { debounceTime, distinctUntilChanged } from "rxjs/operators";
import { Input } from "@/shared/ui/Input";
import { Button } from "@/shared/ui/Button";

interface SearchFormProps {
  onSearch: (value: string) => void;
}

const DEBOUNCE_TIME = 450;

export const SearchForm = memo(({ onSearch }: SearchFormProps) => {
  const [value, setValue] = useState("");
  const subjectRef = useRef<Subject<string> | null>(null);

  const cleanup = useMemo(() => {
    const subject = new Subject<string>();
    subjectRef.current = subject;

    const sub = subject
      .pipe(debounceTime(DEBOUNCE_TIME), distinctUntilChanged())
      .subscribe((term) => onSearch(term));

    return () => {
      sub.unsubscribe();
      subject.complete();
    };
  }, [onSearch]);

  useEffect(() => () => cleanup(), [cleanup]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setValue(val);
    subjectRef.current?.next(val);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(value.trim());
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-3 max-w-2xl mx-auto mb-12">
      <Input
        value={value}
        onChange={handleChange}
        placeholder="Поиск репозиториев GitHub..."
        className="flex-1"
      />
      <Button type="submit" disabled={value.trim().length < 2}>
        Найти
      </Button>
    </form>
  );
});