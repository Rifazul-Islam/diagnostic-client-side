import doctor1 from '../../../assets/doctor1.jpg'
import doctor2 from '../../../assets/doctor2.jpg'
import doctor3 from '../../../assets/doctor3.jpg'
import doctor4 from '../../../assets/doctor4.jpg'

const Doctor = () => {
return (
<div>

    <h2 className='text-center font-bold text-4xl text-orange-600 py-20'> Our Doctors</h2>
<div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4'>

            
<div className="card card-compact  bg-base-100 shadow-xl">
  <figure><img className='w-full h-96' src={doctor1} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title font-bold">Dr.Veranda Tanumihardja!</h2>

  </div>
</div>


<div className="card card-compact  bg-base-100 shadow-xl">
  <figure><img className='w-full h-96' src={doctor2} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title font-bold">Dr. Hooman Azmi !</h2>

  </div>
</div>



<div className="card card-compact  bg-base-100 shadow-xl">
  <figure><img className='w-full h-96' src={doctor4} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title font-bold">Dr. Kathryn Wood !</h2>

  </div>
</div>

<div className="card card-compact  bg-base-100 shadow-xl">
  <figure><img className='w-full h-96' src={doctor3} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title font-bold ">Dr. Peter Parker !</h2>

  </div>
</div>


</div>
</div>
    );
};

export default Doctor;