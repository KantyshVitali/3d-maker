import { Formik, Field, Form } from 'formik';
import React, { useState } from 'react';

import Scene from '../Scene';

import './Controller.scss';

const Controller = () => {
  const [position, setPosition] = useState<[x: number, y: number, z: number]>([0, 0, 0]);
  const [geometry, setGeometry] = useState<[x: number, y: number, z: number]>([1, 1, 1]);
  const [speed, setSpeed] = useState(0.01);
  return (
    <div className="container">
      <Scene position={position} geometry={geometry} speed={speed} />
      <div className="controllers">
        <div>
          <span>position :</span>
          <Formik
            initialValues={{ x: position[0], y: position[1], z: position[2] }}
            onSubmit={values => {
              setPosition([values.x, values.y, values.z]);
            }}
          >
            <Form>
              <Field name="x" type="number" />
              <Field name="y" type="number" />
              <Field name="z" type="number" />
              <button type="submit">Submit</button>
            </Form>
          </Formik>
        </div>

        <div>
          <span>box buffer geometry :</span>
          <Formik
            initialValues={{ x: geometry[0], y: geometry[1], z: geometry[2] }}
            onSubmit={values => {
              setGeometry([values.x, values.y, values.z]);
            }}
          >
            <Form>
              <Field name="x" type="number" />
              <Field name="y" type="number" />
              <Field name="z" type="number" />
              <button type="submit">Submit</button>
            </Form>
          </Formik>
        </div>

        <div>
          <span>rotate speed</span>
          <Formik
            initialValues={{ speed }}
            onSubmit={values => {
              setSpeed(values.speed);
            }}
          >
            <Form>
              <Field name="speed" type="number" />
              <button type="submit">Submit</button>
            </Form>
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default Controller;
