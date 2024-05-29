import { createServer } from '@/components/supabase_server_client';
import Profile from '@/components/upload-image';

export default async function Home() {

  const supabase = createServer();
  const { data, error } = await supabase.from("medico_users").select("*")

  return (
    <pre>
      {JSON.stringify(data, null, 2)}
      <Profile />
    </pre>
  );
}
