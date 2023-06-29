

const Title = ({title,subTitle}) => {
    return (
        <div data-aos="fade-up"
        data-aos-duration="3000" className="my-12">
        <p className="text-center text-white text-2xl uppercase">{title}</p>
        <hr className="w-4/12  mx-auto my-4"/>
        <h1 className="text-center text-4xl text-indigo-800 font-bold uppercase">{subTitle}</h1>
        <hr className="w-4/12  mx-auto my-4"/>
    </div>
    );
};

export default Title;