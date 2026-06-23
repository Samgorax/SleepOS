export type SessionUser = {
  id: string;
  fullName: string;
  email: string;
  role: "customer" | "admin" | "super_admin" | "b2b_manager" | "tender_manager";
};


export async function getCurrentSession(): Promise<SessionUser | null> {
  return null;
}

