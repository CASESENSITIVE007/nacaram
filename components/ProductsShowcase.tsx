import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function ProductsShowcase() {
  return (
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
      <Card>
        <CardHeader>
          <CardTitle>Card 1</CardTitle>
          <CardDescription>Card 1 description</CardDescription>
        </CardHeader>
        <CardContent>Card 1 content</CardContent>
        <CardFooter>Card 1 footer</CardFooter>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Card 2</CardTitle>
          <CardDescription>Card 2 description</CardDescription>
        </CardHeader>
        <CardContent>Card 2 content</CardContent>
        <CardFooter>Card 2 footer</CardFooter>
      </Card>
    </div>
  );
}
