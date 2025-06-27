import { Display, Heading, Body, Caption, Link, Quote, Code, Label } from "./typography"

export function TypographyShowcase() {
  return (
    <div className="max-w-4xl mx-auto p-8 space-y-12">
      <div>
        <h2 className="text-2xl font-bold mb-6">Typography System</h2>

        {/* Display Text */}
        <div className="mb-8">
          <Label className="mb-2 block">Display Text</Label>
          <Display size="sm">Small Display</Display>
          <Display size="md">Medium Display</Display>
          <Display size="lg" color="primary">
            Large Primary Display
          </Display>
        </div>

        {/* Headings */}
        <div className="mb-8">
          <Label className="mb-2 block">Headings</Label>
          <div className="space-y-2">
            <Heading level={1}>Heading Level 1</Heading>
            <Heading level={2}>Heading Level 2</Heading>
            <Heading level={3}>Heading Level 3</Heading>
            <Heading level={4}>Heading Level 4</Heading>
            <Heading level={5}>Heading Level 5</Heading>
            <Heading level={6}>Heading Level 6</Heading>
          </div>
        </div>

        {/* Body Text */}
        <div className="mb-8">
          <Label className="mb-2 block">Body Text</Label>
          <div className="space-y-4">
            <Body size="xl">Extra large body text for introductions and important content.</Body>
            <Body size="lg">Large body text for emphasis and readability.</Body>
            <Body size="md">Medium body text for regular content and paragraphs.</Body>
            <Body size="sm">Small body text for secondary information.</Body>
          </div>
        </div>

        {/* Links */}
        <div className="mb-8">
          <Label className="mb-2 block">Links</Label>
          <div className="space-y-2">
            <div>
              <Link href="#" variant="default">
                Default Link
              </Link>
            </div>
            <div>
              <Link href="#" variant="subtle">
                Subtle Link
              </Link>
            </div>
            <div>
              <Link href="#" variant="nav">
                Navigation Link
              </Link>
            </div>
            <div>
              <Link href="#" variant="button">
                Button Link
              </Link>
            </div>
          </div>
        </div>

        {/* Captions */}
        <div className="mb-8">
          <Label className="mb-2 block">Captions</Label>
          <div className="space-y-2">
            <Caption size="sm">Small caption text</Caption>
            <Caption size="xs" color="muted">
              Extra small muted caption
            </Caption>
          </div>
        </div>

        {/* Quote */}
        <div className="mb-8">
          <Label className="mb-2 block">Quote</Label>
          <Quote size="lg">"Design is not just what it looks like and feels like. Design is how it works."</Quote>
        </div>

        {/* Code */}
        <div className="mb-8">
          <Label className="mb-2 block">Code</Label>
          <Body>
            Here's some <Code>inline code</Code> within a paragraph.
          </Body>
          <Code variant="block" as="pre" className="mt-4">
            {`function hello() {
  console.log("Hello, world!");
}`}
          </Code>
        </div>
      </div>
    </div>
  )
}
