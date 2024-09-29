import { m } from 'framer-motion';
// @mui
import { alpha, useTheme } from '@mui/material/styles';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Card, { CardProps } from '@mui/material/Card';
// components
import Image from 'src/components/image';
import { MotionContainer, varFade } from 'src/components/animate';
import Carousel, { CarouselDots, CarouselArrows, useCarousel } from 'src/components/carousel';

// ----------------------------------------------------------------------

type ItemProps = {
  id: string;
  title: string;
  coverUrl: string;
  description: string;
};

interface Props extends CardProps {
  list: ItemProps[];
}

export default function AppFeatured({ list, ...other }: Props) {
  const carousel = useCarousel({
    speed: 800,
    autoplay: true,
    ...CarouselDots({
      sx: {
        top: 16,
        left: 16,
        position: 'absolute',
        color: 'primary.light',
      },
    }),
  });

  return (
    <Card {...other}>
      <Carousel ref={carousel.carouselRef} {...carousel.carouselSettings}>
        {list.map((app, index) => (
          <CarouselItem key={app.id} item={app} active={index === carousel.currentIndex} />
        ))}
      </Carousel>

      <CarouselArrows
        onNext={carousel.onNext}
        onPrev={carousel.onPrev}
        sx={{ top: 8, right: 8, position: 'absolute', color: 'common.white' }}
      />
    </Card>
  );
}

// ----------------------------------------------------------------------

type CarouselItemProps = {
  item: ItemProps;
  active?: boolean;
};

function CarouselItem({ item, active }: CarouselItemProps) {
  const theme = useTheme();

  const { coverUrl, title, description } = item;

  const renderImg = (
    <Image
      alt={title}
      src={coverUrl}
      overlay={`linear-gradient(to bottom, ${alpha(theme.palette.grey[900], 0)} 0%, ${
        theme.palette.grey[900]
      } 95%)`}
      sx={{
        width: 1,
        height: {
          xs: 280,
          xl: 320,
        },
      }}
    />
  );

  return (
    <MotionContainer action animate={active} sx={{ position: 'relative' }}>
        <Stack
            spacing={1}
            sx={{
                p: 3,
                width: 2,
                bottom: 0,
                zIndex: 9,
                textAlign: 'left',
                position: 'absolute',
                color: 'common.white',
            }}
        >

            <m.div variants={varFade().inRight}>
                <Typography variant="h5" sx={{color: 'primary.light'}}>
                    Voucher  <Typography variant="h3" sx={{color: 'white'}}>15%</Typography>
                </Typography>
            </m.div>

            <m.div variants={varFade().inRight}>
                <Typography variant="body2" noWrap={true}>
                    {description}
                </Typography>
            </m.div>
        </Stack>

        {renderImg}
    </MotionContainer>
  );
}
