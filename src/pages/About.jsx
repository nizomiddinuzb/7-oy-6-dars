const About = () => {
  return (
    <>
      <div className="p-56 flex justify-center items-center flex-col -mt-10">
        <div style={{fontSize:50}} className="flex justify-center gap-5 items-center">
          <span>We love</span> <button className=" btn btn-info no-animation btn-lg comfy" style={{fontSize:35,}}>comfy</button>
        </div>
        <div><p style={{fontSize:20,width:'100%',maxWidth:700}} className="text-center">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore quae quam blanditiis vitae, dolor non eveniet ipsum voluptatibus, quia optio aut! Perferendis ipsa cumque ipsam nostrum reprehenderit ad illo sed officiis ea tempore! Similique eos minima sit porro, ratione aspernatur!</p></div>
      </div>
    </>
  );
};

export default About;
