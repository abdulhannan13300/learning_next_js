const getPredictedAge = async (name: String) => {
  const res = await fetch(`https://api.agify.io?name=${name}`);
  return res.json();
};

const getPredictedGender = async (name: String) => {
  const res = await fetch(`https://api.genderize.io?name=${name}`);
  return res.json();
};

const getPredictedCountry = async (name: String) => {
  const res = await fetch(`https://api.nationalize.io?name=${name}`);
  return res.json();
};

interface Params {
  params: { name: String };
}

export default async function Page({ params }: Params) {
  const ageData = getPredictedAge(params.name);
  const genderData = getPredictedGender(params.name);
  const countryData = getPredictedCountry(params.name);

  const [age, gender, country] = await Promise.all([
    ageData,
    genderData,
    countryData,
  ]);

  return (
    // <main className="flex min-h-screen flex-col items-center justify-center">
    //   {params.name}
    // </main>
    <div className="flex flex-col min-h-screen items-center justify-center bg-gray-300">
      <div className="bg-slate-950 shadow-sm p-14 rounded-md">
        <div className="mb-5">Personal Info</div>
        {/* API contains count, name and age we use as we need it for this project */}
        {/* Same for the another 2 API */}

        <div className="p-1"> Age: {age?.age}</div>
        <div className="p-1"> Gender: {gender?.gender}</div>
        <div className="p-1"> Country: {country?.country[0]?.country_id}</div>
      </div>
    </div>
  );
}
