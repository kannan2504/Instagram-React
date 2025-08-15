function Course(){
    const courses=[
                    {
                        name:"kannan",
                        age:20,
                        weight:50
                    },{
                        name:"helllkannan",
                        age:20,
                        weight:50
                    }

    ]


   return (
    <>
      {courses.map((c, index) => (
        <div key={index}>
          <p>Name: {c.name}</p>
          <p>Age: {c.age}</p>
          <p>Weight: {c.weight}</p>
        </div>
      ))}
    </>
  );
}
export default Course