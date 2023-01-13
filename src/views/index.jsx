/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Row, Col, Carousel } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import Navbar from './navbar';
import '../styles/style.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Content1 from '../assets/images/bg.jpg';
import Content2 from '../assets/images/about-bg.jpg';
import Balance from '../assets/images/balance-scale.png';

function landingPage() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    // eslint-disable-next-line no-alert
    alert(JSON.stringify(data));
  }; // your form submit funct
  console.log(watch('example'));

  return (
    <div>
      <Navbar />
      {/* Section Jumbotron */}
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={Content1}
            alt="First slide"
          />
          <Carousel.Caption>
            <h4 className="caraousel-caption w-50 text-start ps-3">
              THIS IS A PLACE WHERE TECHNOLOGY & CREATIVITY FUSDED INTO DIGITAL CHEMISTRY
            </h4>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={Content2}
            alt="Second slide"
          />
          <Carousel.Caption>
            <h4 className="caraousel-caption w-50 text-start ps-3">
              WE DON&apos;T HAVE THE BEST BUT WE HAVE THE GREATEST TEAM
            </h4>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      {/* Section Our Values */}
      <Row>
        <Col className="col-12 px-md-5 pt-5">
          <div className="mb-5">
            <h3 className="fw-bold">OUR VALUES</h3>
            <div className="our-values d-flex flex-column flex-lg-row justify-content-center pt-3 text-center text-white gap-3">
              <div className="col-md-2 innovative d-flex flex-column px-3 py-3">
                <h1><i className="bi bi-lightbulb" /></h1>
                <h4>INNOVATIVE</h4>
                <h5>Travel Transactions</h5>
                <p className="pt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae provident iure officia obcaecati officiis aliquam</p>
              </div>
              <div className="col-md-2 loyality d-flex flex-column px-3 py-3">
                <h1><i className="bi bi-bank fa-3x" /></h1>
                <h4>LOYALITY</h4>
                <h5>Plane</h5>
                <p className="pt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae provident iure officia obcaecati officiis aliquam</p>
              </div>
              <div className="col-md-2 respect d-flex flex-column px-3 py-3">
                <img src={Balance} alt="balance-scale" className="balance" />
                <h4 className="pt-2">RESPECT</h4>
                <h5>Travel Transactions</h5>
                <p className="pt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae provident iure officia obcaecati officiis aliquam</p>
              </div>
            </div>
          </div>
        </Col>
      </Row>
      {/* Section Contact Us */}
      <Row>
        <Col>
          <h3 className="fw-bold pt-5">Contact Us</h3>
          <form onSubmit={handleSubmit(onSubmit)} className="pb-5">
            <div className="col-lg-6 col-6" />
            <div className="form-group mb-3">
              <label>Name</label>
              <input
                {...register('firstName', {
                  required: true,
                  maxLength: 20,
                  pattern: /^[A-Za-z]+$/i,
                })}
              />
              {errors?.firstName?.type === 'required' && <p>Name is required</p>}
              {errors?.firstName?.type === 'maxLength' && (
              <p>First name cannot exceed 20 characters</p>
              )}
              {errors?.firstName?.type === 'pattern' && (
              <p>Alphabetical characters only</p>
              )}
            </div>
            <div className="form-group mb-3">
              <label className="mb-2">Email</label>
              <input
                {...register('email', {
                  required: true,
                  pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                })}
              />
              {errors?.email?.type === 'required' && <p>Email is required</p>}
              {errors?.email?.type === 'pattern' && (
              <p>Please input true email &quot;@&quot; & &quot;.&quot;</p>
              )}
            </div>
            <div className="form-group mb-3">
              <label>Message</label>
              <textarea
                {...register('message', {
                  required: true,
                  minLength: 8,
                  pattern: /^[A-Za-z]+$/i,
                })}
              />
              {errors?.message?.type === 'required' && <p>Message is required</p>}
              {errors?.message?.type === 'minLength' && (
              <p>Message Too Short</p>
              )}
              {errors?.message?.type === 'pattern' && (
              <p>Alphabetical characters only</p>
              )}
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
          </form>
        </Col>
      </Row>
      {/* Footer */}
      <div className="footer border-top py-4 text-white bg-dark">
        <div className="container-lg">
          <div className="row">
            <div className="col-lg-12">
              <p className="m-0 text-center fw-bold"> Copyright &copy; 2016, PT Company </p>
              <i className="bi bi-facebook" />
              {' '}
              <i className="bi bi-twitter" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default landingPage;
