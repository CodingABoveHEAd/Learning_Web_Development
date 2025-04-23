import { useQuery } from "@tanstack/react-query";
import fetcher from "./fetcher";

export default function Query() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["quote"],
    queryFn: () => fetcher("https://api.quotable.io/random"),
  });

  if (isLoading) return <h3>Loading...</h3>;
  if (error) return <h3>Error fetching quote</h3>;

  return (
    <div>
      <h3>{data.content}</h3>
      <p>— {data.author}</p>
    </div>
  );
}
