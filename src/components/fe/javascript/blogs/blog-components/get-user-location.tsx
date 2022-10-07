import React, { useEffect } from 'react';
import { IOrderedListItemType } from '../../../../../types/common';
import { ImagePaths } from '../../../../../util/image-path-constants';
import Code from '../../../../shared/code/code';
import Container from '../../../../shared/container/container';
import Heading from '../../../../shared/heading/heading';
import Para from '../../../../shared/para/para';
import Space from '../../../../shared/space/space';
import {
  B,
  BI,
  I,
  IU,
  NewLine,
  OrderedList
} from '../../../../shared/util/util';
import YalsImage from '../../../../shared/yals-image/yals-image';

const geolocationPositionItems: Array<IOrderedListItemType> = [
  {
    label: (
      <>
        <B>latitude</B>
        <NewLine />
        Holds the user location's <B>latitude</B> value in degrees.
      </>
    )
  },
  {
    label: (
      <>
        <B>longitude</B>
        <NewLine />
        Holds the user location's <B>longitude</B> value in degrees.
      </>
    )
  },
  {
    label: (
      <>
        <B>altitude</B>
        <NewLine />
        This represents the user position's <B>altitude</B> in <I>meters</I>,
        relative to sea level.
      </>
    )
  },
  {
    label: (
      <>
        <B>accuracy</B>
        <NewLine />
        This represents the accuracy of the <I>latitude</I> and <I>longitude</I>
        <Space /> in <I>meters</I>.
      </>
    )
  },
  {
    label: (
      <>
        <B>altitudeAccuracy</B>
        <NewLine />
        This represents the accuracy of the <I>altitude</I> in <I>meters</I>.
      </>
    )
  },
  {
    label: (
      <>
        <B>speed</B>
        <NewLine />
        This represents the <I>speed</I> of the device in
        <Space /> <I>meters per second</I>.
      </>
    )
  },

  {
    label: (
      <>
        <B>heading</B>
        <NewLine />
        This represents the <B>direction</B> towards which the device is
        faicing. Value is specified in <I>degrees</I>, indicating how far off
        from heading true <B>north</B> the device is. <I>0 (Zero)</I> degrees
        represents the <B>true north</B>, and the direction is determined
        clockwise, which means that east is 90 degrees and west is 270 degrees.
        If speed is 0 (Zero), heading is <BI>NaN</BI>. If the device is unable
        to provide heading, value would be <BI>null</BI>.
      </>
    )
  }
];

const geolocationPositionErrorItems: Array<IOrderedListItemType> = [
  {
    label: (
      <>
        <B>code</B>
        <NewLine />
        This represent the error code, which can have either of below value:
        <NewLine />
        <B>1:</B> PERMISSION_DENIED
        <NewLine />
        <B>2:</B> POSITION_UNAVAILABLE
        <NewLine />
        <B>3:</B> TIMEOUT
      </>
    )
  },
  {
    label: (
      <>
        <B>message</B>
        <NewLine />
        User friendly error message.
      </>
    )
  }
];

const geolocationPositionOptionItems: Array<IOrderedListItemType> = [
  {
    label: (
      <>
        <B>maximumAge</B>
        <NewLine />
        Maximum age in <I>milliseconds</I> for which the location should be
        <Space /> <B>cached</B>. Default value is <B>0</B>. The 0 (Zero)
        instructs not to cache location.
      </>
    )
  },
  {
    label: (
      <>
        <B>timeout</B>
        <NewLine />
        Maximum length of time in <I>milliseconds</I>, device is allowed to take
        to return a position. Default value is <I>Infinity</I>.
      </>
    )
  },
  {
    label: (
      <>
        <B>enableHighAccuracy</B>
        <NewLine />A <I>boolean</I> flag to return more accurate values. Default
        value is <I>false</I>.
      </>
    )
  }
];

const JSBlogGetUserLocation = () => {
  const successHandler = (successResponse: any) => {
    console.log(successResponse);
  };

  const errorHandler = (errorResponse: any) => {
    console.log(errorResponse);
  };

  const getUserLocation = () => {
    window.navigator.geolocation.getCurrentPosition(
      successHandler,
      errorHandler
    );
  };

  useEffect(() => {
    getUserLocation();
  }, []);

  return (
    <Container>
      <Heading as='h1'>Get User Location</Heading>
      <Para>
        The <Space />
        <BI>getCurrentPosition()</BI> <Space /> method of <Space />
        <I>{`window.navigator.geolocation`}</I> is used to get the current
        position of the device. This will give a <I>prompt</I> to user in
        address bar to either <Space />
        <B>"Allow"</B> or <B>"Block"</B> the location request.
      </Para>

      <Para>
        <IU>Syntax:</IU>
        <NewLine />
        <BI>getCurrentPosition</BI>(successHandler, errorHandler, options)
      </Para>

      <Para>
        <B>successHandler:</B> Callback method called on success event.
        <NewLine />
        <B>errorHandler:</B> Callback method called on error event.
        <NewLine />
        <B>options:</B> Optional configurations.
      </Para>

      <Para>
        <IU>Example:</IU>
        <Code>{`const successHandler = (successResponse) => {
  console.log(successResponse);
};
      
const errorHandler = (errorResponse) => {
  console.log(errorResponse);
};

const getUserLocation = () => {
  window.navigator.geolocation
  .getCurrentPosition(
    successHandler,
    errorHandler
  );
}`}</Code>
      </Para>

      <Para>
        Above code will ask the user permission in below popup.
        <YalsImage
          imagePath={ImagePaths.JS.BLOGS.GET_USER_LOCATION.PERMISSION_POPUP}
          alt='Asking User Permission For Location'
          width='100%'
        />
      </Para>

      <Para>
        If user click on <B>"Allow"</B> button, <BI>successCallback</BI> will be
        called and log below information.
      </Para>

      <Code>
        {`{ 
  coords: {
    accuracy: 1199.715114846548
    altitude:  null
    altitudeAccuracy: null
    heading: null
    latitude: 18.5829449
    longitude: 59.584258
    speed: null
  }
  timestamp: 1665140605284
}`}
      </Code>

      <Para>
        But, if user denies permission by clicking on <B>"Block"</B> button,{' '}
        <BI>errorCallback</BI> will be called and log below information.
      </Para>

      <Code>
        {`{
  code: 1
  message: "User denied Geolocation"
}`}
      </Code>

      <Heading as='h2'>Input parameters of getCurrentPosition()</Heading>
      <Heading as='h3'>successHandler</Heading>
      <Para>
        This the callback method called when user location is successfully
        accessed. It returns the <Space />
        <BI>GeolocationPosition</BI> object.
      </Para>

      <Para>
        <I>GeolocationPosition</I> object contains <B>coords</B> and
        <Space /> <B>timeStamp</B> attributes. The <BI>coords</BI> attribute
        contains below given properties:
        <OrderedList unOrdered items={geolocationPositionItems} />
      </Para>

      <Heading as='h3'>errorHandler</Heading>
      <Para>
        This the callback method called when error is thrown while accessing
        location. It returns the <Space />
        <BI>GeolocationPositionError</BI> object.
      </Para>

      <Para>
        <I>GeolocationPositionError</I> object contains <B>code</B> and
        <Space /> <B>message</B> attributes.
        <OrderedList unOrdered items={geolocationPositionErrorItems} />
      </Para>

      <Heading as='h3'>options</Heading>
      <Para>
        These are the <I>optional</I> properties.
      </Para>

      <Para>
        <OrderedList unOrdered items={geolocationPositionOptionItems} />
      </Para>
    </Container>
  );
};

export default JSBlogGetUserLocation;
