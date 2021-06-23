import Head from 'next/head';
import Image from 'next/image';
import Input from '../components/atomics/form/Input';
import Label from '../components/atomics/form/Label';
import Button from '../components/atomics/form/Button';
import { House } from 'react-bootstrap-icons';

export default function Home() {
  return (
    <div>
      <Label text='Name' />
      <Input placeholder='Name' />
      <Button text='button'><House /></Button>
    </div>
  )
}
