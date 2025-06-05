// app/events/[id]/page.tsx

import EventDetails from '@/components/events/EventDetails';
import TicketPurchase from '@/components/tickets/TicketPurchase';
import { Separator } from '@/components/ui/separator';
import { mockEvents } from '@/lib/mock-data'; // assuming you're using mock data for now

export async function generateStaticParams() {
  // Provide a list of params (event IDs) to pre-render at build time
  return mockEvents.map((event) => ({
    id: event.id,
  }));
}

export default function EventPage({ params }: { params: { id: string } }) {
  return (
    <div className="container mx-auto px-4 py-8">
      <EventDetails id={params.id} />
      <Separator className="my-8" />
      <TicketPurchase eventId={params.id} />
    </div>
  );
}
