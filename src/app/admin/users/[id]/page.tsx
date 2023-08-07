type EditUserProps = {
  params: {
    id: string;
  };
};

export default function EditUser({ params }: EditUserProps) {
  return (
    <div>
      <h1>Edit User {params.id}</h1>
    </div>
  );
}
