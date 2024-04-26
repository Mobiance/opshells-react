const About = () => {
    return (
        <div className="flex flex-row">
            <div className="p-5">
                <h1 className="text-3xl font-semibold p-5 ">About Us</h1>
                <p className="text-justify">We are a pioneering tech startup that specializes in providing innovative solutions to our customers. With our cutting-edge technology and unwavering commitment to quality, we offer the highest standard of service that surpasses industry standards. Our team of skilled professionals works diligently to ensure that every customer receives the best possible experience. We understand that time is of the essence, which is why we prioritize timely delivery and efficient services. Our unwavering dedication to customer satisfaction is evident in our consistent track record of excellence. By choosing us, you can trust that you are in the hands of the best in the industry. Join us on our journey towards a better tomorrow, where technology and quality converge to create exceptional experiences</p>
            </div>
            <img src="/think.jpg" alt="about" width={300} height={150} />
        </div>
    )
}
export default About;
