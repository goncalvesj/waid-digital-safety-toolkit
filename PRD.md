# Digital Safety Toolkit for Women's Aid

A privacy-first, client-only digital safety resource that helps women navigate technology safety concerns without storing any data or leaving digital traces.

**Experience Qualities**:
1. **Safe** - Zero data persistence ensures no evidence of use remains on device
2. **Accessible** - Clear, simple language with immediate actionable guidance
3. **Discreet** - Quick exit functionality and minimal visual footprint for safety

**Complexity Level**: Light Application (multiple features with basic state)
- Multiple interactive decision trees and checklists require coordinated state management, but no user accounts or complex data relationships. Focus on in-memory state only for maximum privacy.

## Essential Features

### Quick Exit Button
- **Functionality**: Always-visible red button that instantly redirects to BBC using location.replace()
- **Purpose**: Emergency escape for users in unsafe situations
- **Trigger**: Single click/tap on prominent red button
- **Progression**: Click → Immediate redirect (no browser history entry)
- **Success criteria**: Instant navigation with no trace in browser history

### Interactive Decision Trees
- **Functionality**: JSON-driven branching questionnaires for different safety scenarios
- **Purpose**: Guide users through complex digital safety decisions step-by-step
- **Trigger**: Selecting a safety topic from main menu
- **Progression**: Topic selection → Question display → Answer choice → Next question/guidance → Final recommendations
- **Success criteria**: Clear path through complex scenarios with actionable outcomes

### Digital Safety Checklists
- **Functionality**: Interactive checklists for various security actions
- **Purpose**: Provide structured guidance for securing digital accounts and devices
- **Trigger**: Selecting checklist from main menu or decision tree outcome
- **Progression**: Checklist selection → Item-by-item review → Optional print/copy functionality
- **Success criteria**: Easy-to-follow steps with progress tracking (memory only)

### Guidance Panels
- **Functionality**: Concise, accessible information panels for specific scenarios
- **Purpose**: Provide immediate help for common digital safety concerns
- **Trigger**: Accessing from decision tree results or direct navigation
- **Progression**: Scenario selection → Guidance display → Related resources/checklists
- **Success criteria**: Clear, actionable advice in accessible language

## Edge Case Handling
- **Browser refresh**: All state resets completely - no recovery attempts
- **Accidental navigation**: No breadcrumbs or back buttons that could expose previous choices
- **Multiple tabs**: Each instance operates independently with no shared state
- **Screen readers**: Full ARIA labeling and keyboard navigation support
- **Low connectivity**: All content bundled, no external resource dependencies

## Design Direction
The design should feel calm, trustworthy, and professional while maintaining urgency for the Quick Exit functionality - a clean, healthcare-like interface that inspires confidence without feeling clinical or intimidating.

## Color Selection
Complementary (opposite colors) - Using warm, trustworthy tones with high-contrast safety elements to balance approachability with the serious nature of digital safety.

- **Primary Color**: Deep Teal (oklch(0.45 0.12 200)) - Communicates trust, safety, and professionalism
- **Secondary Colors**: Soft Gray (oklch(0.85 0.02 200)) for backgrounds and Light Teal (oklch(0.75 0.08 200)) for accents
- **Accent Color**: Warm Orange (oklch(0.65 0.15 45)) for positive actions and progress indicators
- **Quick Exit Color**: Alert Red (oklch(0.55 0.22 25)) for emergency exit functionality
- **Foreground/Background Pairings**:
  - Background White (oklch(0.98 0 0)): Deep Teal text (oklch(0.25 0.12 200)) - Ratio 7.2:1 ✓
  - Primary Teal (oklch(0.45 0.12 200)): White text (oklch(0.98 0 0)) - Ratio 7.2:1 ✓
  - Accent Orange (oklch(0.65 0.15 45)): White text (oklch(0.98 0 0)) - Ratio 4.8:1 ✓
  - Alert Red (oklch(0.55 0.22 25)): White text (oklch(0.98 0 0)) - Ratio 5.1:1 ✓

## Font Selection
Typography should convey clarity and accessibility with excellent readability across all devices, using a clean sans-serif that feels modern but not tech-corporate.

- **Typographic Hierarchy**:
  - H1 (Page Title): Inter Bold/28px/tight letter spacing
  - H2 (Section Headers): Inter Semibold/24px/normal spacing
  - H3 (Subsections): Inter Medium/20px/normal spacing
  - Body Text: Inter Regular/16px/relaxed line height (1.6)
  - Quick Exit Button: Inter Bold/16px/wide letter spacing
  - Small Text: Inter Regular/14px for disclaimers

## Animations
Subtle, purposeful motion that reduces cognitive load while providing gentle feedback - animations should feel supportive rather than decorative, with special attention to not startling users in potentially stressful situations.

- **Purposeful Meaning**: Smooth transitions communicate progress and safety, while the Quick Exit button uses immediate action without animation
- **Hierarchy of Movement**: Decision tree progression uses gentle slides, checklists use satisfying check animations, Quick Exit has zero animation for immediate response

## Component Selection
- **Components**: Cards for decision tree steps, Accordion for FAQ sections, Checkbox for checklists, Button variants for different action types, Alert for important safety notices
- **Customizations**: Custom Quick Exit button with distinctive red styling, custom progress indicators for decision trees, accessible focus states throughout
- **States**: Buttons show clear hover/focus/active states, checkboxes provide satisfying completion feedback, decision tree options highlight clearly
- **Icon Selection**: Shield icons for safety, Arrow icons for navigation, Check icons for completion, Exit icon for quick escape
- **Spacing**: Generous padding (24px/16px) for touch targets, consistent 16px gaps between related elements, 32px section separation
- **Mobile**: Single-column layout, large touch targets (44px minimum), collapsible navigation, simplified decision tree display with clear progress indicators