import Spinner from "@/app/components/Spinner";

export default function Loading() {
  return (
    <div className="grid items-center justify-center">
      <Spinner />
      <p className="text-xl text-primary-300">Loading data...</p>
    </div>
  );
}
