const About = () => {
    return (
        <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2 md:p-5">
                <h1 className="text-3xl font-semibold md:p-5">About Us</h1>
                <p className="text-justify">We are a pioneering tech startup that specializes in providing innovative solutions to our customers. With our cutting-edge technology and unwavering commitment to quality, we offer the highest standard of service that surpasses industry standards. Our team of skilled professionals works diligently to ensure that every customer receives the best possible experience. We understand that time is of the essence, which is why we prioritize timely delivery and efficient services. Our unwavering dedication to customer satisfaction is evident in our consistent track record of excellence. By choosing us, you can trust that you are in the hands of the best in the industry. Join us on our journey towards a better tomorrow, where technology and quality converge to create exceptional experiences
                </p>
            </div>
            <div className="md:w-1/2">
                <img src="/think.jpg" alt="about" className="w-auto h-[512px]" />
            </div>
        </div>
    );
}

export default About;

