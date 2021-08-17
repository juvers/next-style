const Fetch = ({ data }) => {
  return (
    <>
      <h3>This is a blog page</h3>
      <p>{JSON.stringify(data)}</p>
    </>
  );
};

export default Fetch;

// fetch requests usually made in useeffect can be made here
export async function getStaticProps(context) {
  const res = await fetch(`https://randomuser.me/api/?gender=female`);
  const data = await res.json();

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: { data }, // will be passed to the page component as props
    revalidate: 10,
  };
}
