import React from 'react'
import { Metadata } from 'next'
import Head from 'next/head' // Import the Head component
import Breadcrumbs from '../components/Breadcrumbs'

export const metadata: Metadata = {
  title: 'Privacy Policy | Nexoris Technologies',
  description:
    'NEXORIS Technologies Ltd is committed to protecting your privacy. This policy explains how we handle your data.',
  robots: {
    index: false,
    follow: true,
  },
  alternates: {
    canonical: 'https://nexoristech.com/privacy-policy',
  },
}

const breadcrumbs = [
  { name: 'Home', href: '/', isCurrentPage: false },
  {
    name: 'Privacy Policy',
    href: '/privacy-policy',
    isCurrentPage: true,
  },
]

const PrivacyPolicy = () => {
  // BreadcrumbList schema
  const breadcrumbsSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: breadcrumbs.map((crumb, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: crumb.name,
      item: `https://nexoristech.com${crumb.href}`,
    })),
  }

  return (
    <>
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(breadcrumbsSchema),
          }}
        />
      </Head>
      <main className="mx-6 lg:mx-12 mt-23 lg:mt-32 xl:mx-21">
        <Breadcrumbs breadcrumbs={breadcrumbs} />
        <h1 className="text-3xl font-semibold mb-8 font-heading text-heading text-center">
          Privacy Policy
        </h1>
        <p className="text-lg mb-4 font-heading text-heading">
          <strong>Effective Date:</strong> June 01, 2025
        </p>

        <section className="space-y-8 text-text container mx-auto">
          <p className="text-text font-body">
            <span className="font-semibold">NEXORIS Technologies Ltd</span>{' '}
            (&quot;we,&quot; &rdquo;our,&quot; &quot;us&quot;) is the data
            controller of your personal data. This Privacy Policy outlines how
            we collect, process, and protect your personal information when you
            visit our website. By using our website, you agree to the terms set
            forth in this policy.
          </p>

          <h2 className="text-2xl font-semibold font-heading text-heading">
            Personal Information We Collect
          </h2>
          <p className="text-text font-body">
            When you visit the <strong>NEXORIS Technologies Ltd</strong>{' '}
            website, we automatically collect certain information about your
            device, including information about your web browser, IP address,
            time zone, and some of the installed cookies on your device.
            Additionally, as you browse the website, we collect information
            about the individual web pages or products you view, what websites
            or search terms referred you to the website, and how you interact
            with the website. We refer to this automatically collected
            information as &quot;Device Information.&quot;
            <br /> <br />
            Moreover, we might collect the personal data you provide to us
            (including but not limited to name, email, phone number, request
            type, messages, etc.) during project request form submissions and
            contact form submissions to be able to fulfill the agreement.
          </p>

          <h2 className="text-heading font-heading text-2xl font-semibold">
            Why Do We Process Your Data?
          </h2>
          <article className="text-text font-body">
            <p>
              Our top priority is customer data security, and, as such, we may
              process only minimal user data, only as much as it is absolutely
              necessary to maintain the website. Information collected
              automatically is used only to identify potential cases of abuse
              and establish statistical information regarding website usage.
              This statistical information is not otherwise aggregated in such a
              way that it would identify any particular user of the system.
            </p>

            <p className="my-5">
              You can visit the website without telling us who you are or
              revealing any information that could identify you as a specific,
              identifiable individual. However, if you wish to use some of the
              website’s features, or wish to receive our newsletter or provide
              other details by filling out a form, you may provide personal data
              to us, such as your email, first name, last name, city of
              residence, organization, and telephone number.
            </p>

            <p>
              You can choose not to provide us with your personal data, but then
              you may not be able to take advantage of some of the website’s
              features. For example, you won’t be able to receive our Newsletter
              or contact us directly from the website. Users who are uncertain
              about what information is mandatory are welcome to contact us via
              support@nexoris.com.
            </p>
          </article>

          <h2 className="text-heading font-heading text-2xl font-semibold">
            Your Rights
          </h2>
          <div className="-mt-4">
            <p>
              If you are a European resident, you have the following rights
              related to your personal data:
            </p>
            <ul className="list-disc pl-5 my-4 font-body text-text">
              <li>The right to be informed</li>
              <li>The right of access.</li>
              <li>The right to rectification.</li>
              <li>The right to erasure.</li>
              <li>The right to restrict processing.</li>
              <li>The right to data portability.</li>
              <li>The right to object.</li>
              <li>
                Rights in relation to automated decision-making and profiling.
              </li>
            </ul>
            <p>
              If you would like to exercise these rights, please contact us
              through the contact information below.
            </p>
            <p className="my-4">
              Additionally, if you are a European resident, we note that we are
              processing your information in order to fulfill contracts we might
              have with you (for example, if you make an order through the
              website), or otherwise to pursue our legitimate business interests
              listed above. Additionally, please note that your information
              might be transferred outside of Europe, including Canada and the
              United States.
            </p>
          </div>

          <h2 className="text-heading fint-heading text-2xl font-semibold">
            Links to Other Websites
          </h2>
          <p>
            Our website may contain links to other websites that are not owned
            or controlled by us. Please be aware that we are not responsible for
            such other websites or third parties’ privacy practices. We
            encourage you to be aware when you leave our website and read the
            privacy statements of each website that may collect personal
            information.
          </p>

          <h2 className="text-heading fint-heading text-2xl font-semibold">
            Data Security
          </h2>
          <p>
            We take the security of your personal information very seriously and
            have implemented appropriate technical and organizational measures
            to protect it from unauthorized access, use, disclosure, and loss.
            We regularly review and update these measures to ensure that we
            maintain the highest level of security for your data.
            <br />
            <br />
            Some of the measures we use to protect your data include:
          </p>
          <ul className="list-disc pl-5 font-body text-text -mt-4">
            <li>
              <strong>Encryption:</strong>
              We use industry-standard encryption technologies to protect the
              transmission of personal information between your device and our
              servers.
            </li>
            <li>
              <strong>Access Control:</strong>
              We restrict access to personal information to only those
              employees, contractors, and agents who need it to perform their
              work and are bound by confidentiality obligations.
            </li>
            <li>
              <strong>Regular Security Audits:</strong>
              We perform regular security audits to identify and address
              potential vulnerabilities in our systems.
            </li>
          </ul>
          <p className="-mt-3">
            Despite these efforts, no security measures are perfect, and we
            cannot guarantee that your personal information will never be
            accessed, used, disclosed, or lost. If you become aware of any
            security incidents, please notify us immediately so that we can take
            appropriate action.
          </p>

          <div className="text-text font-body">
            <h2 className="text-2xl font-semibold font-heading text-heading mb-4">
              Retention Period for Personal Data
            </h2>
            <p>
              We are committed to retaining your personal data only for as long
              as necessary to fulfill the purposes outlined in this Privacy
              Policy, unless a longer retention period is required or permitted
              by law. The retention period for personal data may vary depending
              on the type of data and the purposes for which it was collected.
            </p>
            <p className="my-4">
              Generally, we will retain your personal data for the duration of
              your relationship with us and for a reasonable period thereafter
              to comply with legal obligations, resolve disputes, and enforce
              our agreements. Once the personal data is no longer necessary for
              the purposes for which it was collected, we will securely delete
              or anonymize it to prevent unauthorized access or use.
            </p>
            <p>
              The retention periods for specific categories of personal data may
              be influenced by factors such as the nature of the data, the
              sensitivity of the information, and any applicable legal
              requirements. We regularly review our retention practices to
              ensure that we only retain personal data for as long as necessary
              to achieve the purposes for which it was collected.
            </p>
          </div>
        </section>
      </main>
    </>
  )
}

export default PrivacyPolicy
