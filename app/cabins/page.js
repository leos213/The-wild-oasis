import { Suspense } from "react";
import CabinList from "../_components/CabinList";
import Spinner from "../_components/Spinner";

// thiis is ISR (Incremental Static Regeneration) this time invalidate every 0 second
// supabase-ში როდესაც ოთახს ვუცვლიდი ღრებულებას მაშინვე იცვლება
// revalidate-ი თუარ იქნება სტატიკური ერთი რენდერის გამო ვერ ცვლის

// export const revalidate = 0;

export const metadata = {
  title: "Cabins",
};

export default async function Page() {
  // CHANGE

  return (
    <div>
      <h1 className="text-4xl mb-5 text-accent-400 font-medium">
        Our Luxury Cabins
      </h1>
      <p className="text-primary-200 text-lg mb-10">
        Cozy yet luxurious cabins, located right in the heart of the Italian
        Dolomites. Imagine waking up to beautiful mountain views, spending your
        days exploring the dark forests around, or just relaxing in your private
        hot tub under the stars. Enjoy nature's beauty in your own little home
        away from home. The perfect spot for a peaceful, calm vacation. Welcome
        to paradise.
      </p>
      {/* Suspense-ი როდესაც კომპონენტი არ არის მზად რენდერისთვის ( მაგ: fetch და loading-ის დროს ) 
      ასრულებს loading-ის ფუნქციას, მაგ: spinner - ს აჩვენებს სანამ დარენდერდება. მაგრამ სხვა კომპონენტი უკვე ჩატვირთული იქნება. 
      ამ შემთხვევაში სპინერი გამოჩნდება მხოლოდ cabin-ბში */}
      <Suspense fallback={<Spinner />}>
        <CabinList />
      </Suspense>
    </div>
  );
}
