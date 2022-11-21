import React, { memo } from 'react';
import Container from '../container/container';
import Heading from '../heading/heading';
import Para from '../para/para';
import { NewLine, OrderedList } from '../util/util';
import YalsFlex from '../yals-flex/yals-flex';
import {
  FlexAlignItemsTypes,
  FlexJustifyContentTypes
} from '../yals-flex/yals-flex.types';

const infor_list = [
  {
    label: `Provide, operate, and maintain our website.`
  },
  {
    label: `Improve, personalize, and expand our website.`
  },
  {
    label: `Understand and analyze how you use our website.`
  },
  {
    label: `Develop new products, services, features, and functionality`
  },
  {
    label: `Communicate with you, either directly or through one of our partners, including for customer service, to provide you with updates and other information relating to the website, and for marketing and promotional purposes.`
  },
  {
    label: `Send you emails.`
  },
  {
    label: `Find and prevent fraud.`
  }
];

const YALSPrivacyPolicy = () => {
  return (
    <Container>
      <NewLine />
      <Heading as='h1'>Privacy Policy for UI Geeks</Heading>

      <YalsFlex
        justifyContent={FlexJustifyContentTypes.SpaceBetween}
        alignItems={FlexAlignItemsTypes.Center}
      >
        <Para>
          <Para>
            At UI-Geeks-In, accessible from https://ui-geeks.in, one of our main
            priorities is the privacy of our visitors. This Privacy Policy
            document contains types of information that is collected and
            recorded by UI-Geeks-In and how we use it.
          </Para>

          <Para>
            If you have additional questions or require more information about
            our Privacy Policy, do not hesitate to contact us.
          </Para>

          <Para>
            This Privacy Policy applies only to our online activities and is
            valid for visitors to our website with regards to the information
            that they shared and/or collect in UI-Geeks-In. This policy is not
            applicable to any information collected offline or via channels
            other than this website.
          </Para>

          <Heading as='h2'>Consent</Heading>

          <Para>
            By using our website, you hereby consent to our Privacy Policy and
            agree to its terms.
          </Para>

          <Heading as='h2'>Information we collect</Heading>

          <Para>
            The personal information that you are asked to provide, and the
            reasons why you are asked to provide it, will be made clear to you
            at the point we ask you to provide your personal information.
          </Para>
          <Para>
            If you contact us directly, we may receive additional information
            about you such as your name, email address, phone number, the
            contents of the message and/or attachments you may send us, and any
            other information you may choose to provide.
          </Para>
          {/* <Para>
            When you register for an Account, we may ask for your contact
            information, including items such as name, company name, address,
            email address, and telephone number.
          </Para> */}

          <Heading as='h2'>How we use your information</Heading>

          <Para>
            We use the information we collect in various ways, including to:
          </Para>

          <OrderedList unOrdered items={infor_list} />

          {/* <Heading as='h2'>Log Files</Heading>

          <Para>
            UI-Geeks-In follows a standard procedure of using log files. These
            files log visitors when they visit websites. All hosting companies
            do this and a part of hosting services' analytics. The information
            collected by log files include internet protocol (IP) addresses,
            browser type, Internet Service Provider (ISP), date and time stamp,
            referring/exit pages, and possibly the number of clicks. These are
            not linked to any information that is personally identifiable. The
            purpose of the information is for analyzing trends, administering
            the site, tracking users' movement on the website, and gathering
            demographic information.
          </Para> */}

          <Heading as='h2'>Google DoubleClick DART Cookie</Heading>

          <Para>
            Google is one of a third-party vendor on our site. It also uses
            cookies, known as DART cookies, to serve ads to our site visitors
            based upon their visit to www.website.com and other sites on the
            internet. However, visitors may choose to decline the use of DART
            cookies by visiting the Google ad and content network Privacy Policy
            at the following URL -{' '}
            <a href='https://policies.google.com/technologies/ads'>
              https://policies.google.com/technologies/ads
            </a>
          </Para>

          <Heading as='h2'>Advertising Partners Privacy Policies</Heading>

          <Para>
            You may consult this list to find the Privacy Policy for each of the
            advertising partners of UI-Geeks-In.
          </Para>

          <Para>
            Third-party ad servers or ad networks uses technologies like
            cookies, JavaScript, or Web Beacons that are used in their
            respective advertisements and links that appear on UI-Geeks-In,
            which are sent directly to users' browser. They automatically
            receive your IP address when this occurs. These technologies are
            used to measure the effectiveness of their advertising campaigns
            and/or to personalize the advertising content that you see on
            websites that you visit.
          </Para>

          <Para>
            Note that UI-Geeks-In has no access to or control over these cookies
            that are used by third-party advertisers.
          </Para>

          <Heading as='h2'>Third Party Privacy Policies</Heading>

          <Para>
            UI-Geeks-In's Privacy Policy does not apply to other advertisers or
            websites. Thus, we are advising you to consult the respective
            Privacy Policies of these third-party ad servers for more detailed
            information. It may include their practices and instructions about
            how to opt-out of certain options.{' '}
          </Para>

          <Para>
            You can choose to disable cookies through your individual browser
            options. To know more detailed information about cookie management
            with specific web browsers, it can be found at the browsers'
            respective websites.
          </Para>

          <Heading as='h2'>
            CCPA Privacy Rights (Do Not Sell My Personal Information)
          </Heading>

          <Para>
            Under the CCPA, among other rights, California consumers have the
            right to:
          </Para>
          <Para>
            Request that a business that collects a consumer's personal data
            disclose the categories and specific pieces of personal data that a
            business has collected about consumers.
          </Para>
          <Para>
            Request that a business delete any personal data about the consumer
            that a business has collected.
          </Para>
          <Para>
            Request that a business that sells a consumer's personal data, not
            sell the consumer's personal data.
          </Para>
          <Para>
            If you make a request, we have one month to respond to you. If you
            would like to exercise any of these rights, please contact us.
          </Para>

          <Heading as='h2'>GDPR Data Protection Rights</Heading>

          <Para>
            We would like to make sure you are fully aware of all of your data
            protection rights. Every user is entitled to the following:
          </Para>
          <Para>
            The right to access - You have the right to request copies of your
            personal data. We may charge you a small fee for this service.
          </Para>
          <Para>
            The right to rectification - You have the right to request that we
            correct any information you believe is inaccurate. You also have the
            right to request that we complete the information you believe is
            incomplete.
          </Para>
          <Para>
            The right to erasure - You have the right to request that we erase
            your personal data, under certain conditions.
          </Para>
          <Para>
            The right to restrict processing - You have the right to request
            that we restrict the processing of your personal data, under certain
            conditions.
          </Para>
          <Para>
            The right to object to processing - You have the right to object to
            our processing of your personal data, under certain conditions.
          </Para>
          <Para>
            The right to data portability - You have the right to request that
            we transfer the data that we have collected to another organization,
            or directly to you, under certain conditions.
          </Para>
          <Para>
            If you make a request, we have one month to respond to you. If you
            would like to exercise any of these rights, please contact us.
          </Para>

          <Heading as='h2'>Children's Information</Heading>

          <Para>
            Another part of our priority is adding protection for children while
            using the internet. We encourage parents and guardians to observe,
            participate in, and/or monitor and guide their online activity.
          </Para>

          <Para>
            UI-Geeks-In does not knowingly collect any Personal Identifiable
            Information from children under the age of 13. If you think that
            your child provided this kind of information on our website, we
            strongly encourage you to contact us immediately and we will do our
            best efforts to promptly remove such information from our records.
          </Para>
        </Para>
      </YalsFlex>
    </Container>
  );
};

export default memo(YALSPrivacyPolicy);
