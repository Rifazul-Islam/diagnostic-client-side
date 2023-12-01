
const Blog = () => {
    return (
        <div className="pt-2">
       
           <div className="h-96 rounded-lg " style={{backgroundImage: `url(https://servier.com/wp-content/uploads/2022/10/servier-insight-companion-diagnostic-test.jpg)`}}>
         
            <div className="hero-overlay bg-opacity-60">
            <h1 className="mb-5 text-5xl font-bold text-center pt-60 text-white"> Blog Page </h1>
            </div>
            
            </div>
         
      {/* card part */}
         <div className="px-2 mt-28">
           <div className="card card-side bg-base-100 shadow-xl border-2 my-2 flex flex-col md:flex-row">
            <figure><img className="rounded-lg" src="https://servier.com/wp-content/uploads/2022/10/servier-insight-companion-diagnostic-test.jpg" alt="Movie"/></figure>
            <div className="card-body">
                <h2 className="card-title text-3xl font-bold">Understanding Companion Diagnostic!</h2>
               <p>Certainly! A companion diagnostic is a medical test or device that provides information essential for the safe and effective use of a corresponding therapeutic product, such as a medication or treatment. These diagnostics help identify specific characteristics or biomarkers in patients that indicate whether they are suitable candidates for a particular treatment.</p>
                <div className="card-actions justify-end">
                <button className="btn btn-primary">ReadMore ...</button>
                </div>
            </div>
            </div>


           <div className="card card-side bg-base-100 shadow-xl border-2 my-2 flex flex-col md:flex-row">
            <figure><img className="rounded-lg w-[900px] h-[200px]" src="https://www.carygastro.com/uploads/blog/_1200x720_crop_center-center_100_none/Diagnostic-Laparoscopy.jpg" alt="Movie"/></figure>
            <div className="card-body">
                <h2 className="card-title text-3xl font-bold"> Diagnostic Laparoscopy !</h2>
               <p>Diagnostic laparoscopy is a minimally invasive surgical procedure used to examine and evaluate the organs inside the abdomen and pelvis. It involves making small incisions in the abdominal wall through which a thin, flexible tube with a light and camera (laparoscope) is inserted. This allows surgeons to visualize the internal structures on a monitor in real-time.</p>
                <div className="card-actions justify-end">
                <button className="btn btn-primary">ReadMore ...</button>
                </div>
            </div>
            </div>
           <div className="card card-side bg-base-100 shadow-xl border-2 my-2 flex flex-col md:flex-row">
            <figure><img className="rounded-lg w-[900px] h-[200px]" src="https://i2-prod.leicestermercury.co.uk/incoming/article4036201.ece/ALTERNATES/s615/0_NDR_TEM_090420Xray.jpg" alt="Movie"/></figure>
            <div className="card-body">
                <h2 className="card-title text-3xl font-bold"> Modern X-ray !</h2>
               <p>Modern X-ray technology represents a sophisticated imaging method that utilizes electromagnetic radiation to create detailed internal images of the human body. Unlike traditional X-rays, modern X-ray systems often incorporate advanced features such as digital detectors and computerized processing, allowing for enhanced image quality, faster imaging times, and lower radiation exposure.</p>
                <div className="card-actions justify-end">
                <button className="btn btn-primary">ReadMore ...</button>
                </div>
            </div>
            </div>
        



         </div>




        </div>
    );
};

export default Blog;