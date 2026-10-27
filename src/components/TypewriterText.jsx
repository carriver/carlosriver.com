import { Fragment, useEffect, useState } from 'react';

const MIN_KEYSTROKE_DELAY_MS = 20;
const MAX_KEYSTROKE_DELAY_MS = 100;

const randomKeystrokeDelay = () =>
  MIN_KEYSTROKE_DELAY_MS + Math.random() * (MAX_KEYSTROKE_DELAY_MS - MIN_KEYSTROKE_DELAY_MS);

const prefersReducedMotion = () =>
  window.matchMedia?.('(prefers-reduced-motion: reduce)').matches ?? false;

const useTypedCharacterCount = (totalCharacters) => {
  const [typedCount, setTypedCount] = useState(() =>
    prefersReducedMotion() ? totalCharacters : 0,
  );

  useEffect(() => {
    if (typedCount >= totalCharacters) return undefined;
    const keystroke = setTimeout(() => setTypedCount((count) => count + 1), randomKeystrokeDelay());
    return () => clearTimeout(keystroke);
  }, [typedCount, totalCharacters]);

  return typedCount;
};

const visibleLines = (lines, typedCount) => {
  let remaining = typedCount;
  return lines.map((line) => {
    const visible = line.slice(0, Math.max(remaining, 0));
    remaining -= line.length;
    return visible;
  });
};

const TypewriterText = ({ lines }) => {
  const totalCharacters = lines.join('').length;
  const typedCount = useTypedCharacterCount(totalCharacters);

  return (
    <span aria-label={lines.join(' ')}>
      {visibleLines(lines, typedCount).map((line, index) => (
        <Fragment key={index}>
          {index > 0 && <br />}
          <span aria-hidden='true'>{line}</span>
        </Fragment>
      ))}
    </span>
  );
};

export default TypewriterText;
