import RegistrationForm from '@components/forms/home-page-form';
import Cover from '@components/home-page-components/cover';
import Description from '@components/home-page-components/description';
import Line from '@components/ui/line';
import { Stack } from '@mui/material';


export default function Home() {
  return (
    <>
      <Stack>
        <Cover />
        <Description />
        <Line />
        <RegistrationForm />
      </Stack>
      {/* <NearestEvents type="all" /> */}
      {/* <Line /> */}
      {/* <Gallery type="all" />
        <Videos type="all" /> */}
      {/* <RegistrationForm />
        <FooterMap
          place={"Павильон №27"}
          center={[55.834555, 37.612829]}
          address={"пр-т Мира, д. 119, стр. 27"}
        /> */}
    </>
  )
}
