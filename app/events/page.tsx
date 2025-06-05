import EventList from '@/components/events/EventList';
import EventFilters from '@/components/events/EventFilters';
import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';
import Link from 'next/link';

export default function EventsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold mb-2">Discover Events</h1>
          <p className="text-muted-foreground">Find and book tickets for upcoming events</p>
        </div>
        <Link href="/create-event">
          <Button className="mt-4 md:mt-0" size="sm">
            <Plus className="mr-2 h-4 w-4" /> Create Event
          </Button>
        </Link>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        <div className="lg:col-span-1">
          <EventFilters />
        </div>
        <div className="lg:col-span-3">
          <EventList />
        </div>
      </div>
    </div>
  );
}