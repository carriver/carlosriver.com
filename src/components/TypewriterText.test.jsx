import { act, render, screen } from '@testing-library/react';
import { afterEach, describe, expect, it, vi } from 'vitest';
import TypewriterText from './TypewriterText';

const lines = ['Hello there,', "I'm Carlos!"];
const MAX_KEYSTROKE_DELAY_MS = 100;

// Each keystroke schedules the next one after React re-renders, so time has to advance one keystroke per act().
const typeKeystrokes = (count) => {
  for (let keystroke = 0; keystroke < count; keystroke++) {
    act(() => vi.advanceTimersByTime(MAX_KEYSTROKE_DELAY_MS));
  }
};

const mockReducedMotion = (prefersReduced) => {
  vi.stubGlobal('matchMedia', vi.fn(() => ({ matches: prefersReduced })));
};

describe('TypewriterText', () => {
  afterEach(() => {
    vi.useRealTimers();
    vi.unstubAllGlobals();
  });

  it('types the lines out one character at a time', () => {
    vi.useFakeTimers();
    mockReducedMotion(false);
    const { container } = render(<TypewriterText lines={lines} />);

    expect(container).toHaveTextContent(/^$/);
    typeKeystrokes(5);
    expect(container).toHaveTextContent(/^Hello$/);
    typeKeystrokes(lines.join('').length);
    expect(container).toHaveTextContent("Hello there,I'm Carlos!");
  });

  it('shows the whole text immediately when the user prefers reduced motion', () => {
    mockReducedMotion(true);
    const { container } = render(<TypewriterText lines={lines} />);

    expect(container).toHaveTextContent("Hello there,I'm Carlos!");
  });

  it('gives screen readers the full headline while it is still typing', () => {
    mockReducedMotion(false);
    render(<TypewriterText lines={lines} />);

    expect(screen.getByLabelText("Hello there, I'm Carlos!")).toBeInTheDocument();
  });
});
