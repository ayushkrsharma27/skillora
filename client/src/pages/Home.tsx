import Badge from "../components/ui/Badge";
import Button from "../components/ui/Button";
import Card from "../components/ui/Card";
import Container from "../components/layout/Container";

export default function Home() {
  return (
    <Container>
      <div className="py-20 space-y-6">
        <Badge>Skillora UI</Badge>

        <Card>
          <h1 className="text-4xl font-bold">
            Skillora Design System
          </h1>

          <p className="mt-3 text-slate-600">
            Our reusable components are ready.
          </p>

          <div className="mt-6 flex gap-4">
            <Button>Primary</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="outline">Outline</Button>
          </div>
        </Card>
      </div>
    </Container>
  );
}