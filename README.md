# Platform Speak

A mobile-first word game to help Appian sales teams learn and practise platform terminology through Articulate-style gameplay.

## How to Play

Platform Speak follows the classic Articulate format:

1. **Teams take turns** - One player from each team becomes the "describer"
2. **Describe the term** - The describer sees an Appian term and must get their team to guess it
3. **Avoid taboo words** - Each card shows 3-5 words that cannot be used in the description
4. **Beat the clock** - Score as many correct guesses as possible before time runs out
5. **Learn as you go** - After each round, review the official definitions for every term encountered

### Game Flow

```
Home → Team Setup → Pass Phone to Describer → Start Round → [Correct/Pass/Skip] → Round Summary → Next Team
```

### Scoring

- **Correct**: Team scores 1 point, move to next card
- **Pass**: No penalty, move to next card (use when stuck)
- **Skip**: No penalty, move to next card (use if rules broken)

## Word Categories

The game includes **58 cards** across 6 categories:

| Category | Cards | Examples |
|----------|-------|----------|
| Platform Core | 12 | Data Fabric, SAIL, Record Types, Low-Code |
| AI & Intelligence | 10 | Private AI, AI Copilot, DocCenter, Agent Studio |
| Strategic Concepts | 10 | Clean Core, Agility Layer, Swivel-Chair, Burning Platform |
| Customer Success | 8 | Appian Guarantee, Appian Max, Success Plans |
| Solutions & Products | 10 | Connected Claims, Process HQ, Case Management Studio |
| Technical Differentiators | 8 | FedRAMP, Platform-Agnostic, Integration SDK |

Each card includes:
- The term to describe
- 3-5 taboo words to avoid
- Difficulty rating (Easy/Medium/Hard)
- Official definition for learning review

## Game Modes

### Play Mode
- 2-4 teams competing
- Configurable timer (30s, 45s, 60s, 90s)
- Filter by category or difficulty
- Pass-the-phone multiplayer

### Learn Mode
- Browse all 58 terms
- Search and filter functionality
- Expandable cards with full definitions
- Use cases and related terms

## Getting Started

### Prerequisites

- Node.js 18+
- npm

### Installation

```bash
# Clone the repository
git clone git@github.com:davehillier/platform-speak.git
cd platform-speak

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## Tech Stack

- **Framework**: Next.js 16 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **Icons**: Lucide React
- **Deployment**: PWA-ready (can be installed on mobile devices)

## Project Structure

```
src/
├── app/
│   ├── page.tsx              # Home screen
│   ├── play/
│   │   ├── page.tsx          # Game setup
│   │   └── local/game/       # Active gameplay
│   └── learn/
│       └── page.tsx          # Learning glossary
├── components/
│   └── game/
│       ├── GameCard.tsx      # Card display with taboo words
│       ├── Timer.tsx         # Countdown timer
│       ├── ActionButtons.tsx # Correct/Pass/Skip buttons
│       └── RoundSummary.tsx  # Post-round review
├── data/
│   └── cards.ts              # All 58 card definitions
├── hooks/
│   └── useGameState.ts       # Game state management
└── types/
    └── game.ts               # TypeScript interfaces
```

## Future Enhancements

- [ ] Firebase Auth for user accounts
- [ ] Progress tracking and mastery system
- [ ] Sound effects with mute toggle
- [ ] Multi-device sync with game codes
- [ ] Leaderboards and statistics

## Contributing

To add new cards, edit `src/data/cards.ts`. Each card requires:

```typescript
{
  id: 'unique-id',
  term: 'Term Name',
  tabooWords: ['word1', 'word2', 'word3'],
  category: 'platform-core', // or other category
  difficulty: 'medium', // easy, medium, hard
  definition: {
    short: 'One-sentence definition',
    detailed: 'Full explanation with context',
    useCases: ['Example 1', 'Example 2'],
    relatedTerms: ['Related Term 1', 'Related Term 2'],
  },
}
```

## Licence

MIT
