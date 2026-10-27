import { render, screen, within } from '@testing-library/react';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import resumeData from '../public/resumeData.json';
import App from './App';

describe('App', () => {
  beforeEach(() => {
    vi.stubGlobal('fetch', vi.fn(async () => ({ json: async () => resumeData })));
  });

  afterEach(() => {
    vi.unstubAllGlobals();
  });

  it('renders every project with a link to its live demo', async () => {
    render(<App />);

    for (const project of resumeData.portfolio.projects) {
      const projectLink = await screen.findByRole('link', { name: new RegExp(project.title) });
      expect(projectLink).toHaveAttribute('href', project.url);
    }
  });

  it('labels the social links in the header and footer', async () => {
    render(<App />);

    const githubLinks = await screen.findAllByRole('link', { name: 'GitHub' });
    expect(githubLinks).toHaveLength(2);
    githubLinks.forEach((link) => expect(link).toHaveAttribute('href', 'https://github.com/carriver'));
  });

  it('does not mention LinkedIn anywhere', async () => {
    const { container } = render(<App />);

    await screen.findAllByRole('link', { name: 'GitHub' });
    expect(container.innerHTML).not.toMatch(/linkedin/i);
  });

  it('shows the bio in the About section', async () => {
    render(<App />);

    const aboutHeading = await screen.findByRole('heading', { name: 'About Me' });
    expect(within(aboutHeading.parentElement).getByText(resumeData.main.bio)).toBeInTheDocument();
  });
});
