import React from 'react';

import Logo from './Logo';
import './styles.css';

const sections = [
  {
    title: 'Postmates',
    links: [
      {
        name: 'About',
        href: 'https://postmates.com/about',
        text: 'About'
      },
      {
        name: 'Careers',
        href: 'https://postmates.com/jobs',
        text: 'Careers'
      },
      {
        name: 'Blog',
        href: 'https://blog.postmates.com',
        text: 'Blog'
      },
      {
        name: 'Press and Media',
        href: 'https://postmates.com/press-and-media',
        text: 'Press and Media'
      },
      {
        name: 'Civic Labs',
        href: 'https://postmates.com/civic-labs',
        text: 'Civic Labs'
      },
      {
        name: 'Unlimited',
        href: 'https://postmates.com/unlimited',
        text: 'Unlimited'
      },
      {
        name: 'Gift Cards',
        href: 'https://postmates.com/gift',
        text: 'Gift Cards'
      },
      {
        name: 'Pickup',
        href: 'https://postmates.com/pickup',
        text: 'Pickup'
      },
      {
        name: 'Support',
        href: 'https://support.postmates.com/buyer',
        text: 'Support'
      }
    ]
  },
  {
    title: 'Partners',
    links: [
      {
        name: 'Sell on Postmates',
        href: 'https://postmates.com/partner',
        text: 'Sell on Postmates'
      },
      {
        name: 'Developers',
        href: 'https://postmates.com/developer',
        text: 'Developers'
      },
      {
        name: 'API Docs',
        href: 'https://postmates.com/developer/docs',
        text: 'API Docs'
      },
      {
        name: 'Partner Support',
        href: 'https://partner-help.postmates.com',
        text: 'Partner Support'
      },
      {
        name: 'Restaurants Near Me',
        href: 'https://postmates.com/brands',
        text: 'Restaurants Near Me'
      }
    ]
  },
  {
    title: 'Fleet',
    links: [
      {
        name: 'Join the Fleet',
        href: 'https://fleet.postmates.com',
        text: 'Join the Fleet'
      },
      {
        name: 'Fleet Support',
        href: 'https://fleet-help.postmates.com',
        text: 'Fleet Support'
      }
    ]
  },
  {
    title: 'Follow Us',
    links: [
      {
        href: 'https://www.facebook.com/postmates',
        text: 'Facebook'
      },
      {
        href: 'https://twitter.com/postmates',
        text: 'Twitter'
      },
      {
        href: 'https://www.snapchat.com/add/postmates',
        text: 'Snapchat'
      },
      {
        href: 'https://instagram.com/postmates',
        text: 'Instagram'
      }
    ]
  },
  {
    title: 'Cities',
    links: [
      {
        href: 'https://postmates.com/delivery/los-angeles',
        text: 'Los Angeles'
      },
      {
        href: 'https://postmates.com/delivery/new-york-city',
        text: 'New York City'
      },
      {
        href: 'https://postmates.com/delivery/miami',
        text: 'Miami'
      },
      {
        href: 'https://postmates.com/delivery/chicago',
        text: 'Chicago'
      },
      {
        href: 'https://postmates.com/delivery/phoenix',
        text: 'Phoenix'
      },
      {
        href: 'https://postmates.com/delivery-near-me',
        text: 'Delivery Near Me'
      },
      {
        href: 'https://postmates.com/pickup-near-me',
        text: 'Takeout Near Me'
      },
      {
        href: 'https://postmates.com/alcohol',
        text: 'Alcohol Delivery'
      }
    ]
  }
];

const YEAR = new Date().getFullYear();

class Footer extends React.PureComponent {
  onClick = () => {
    window.ignoreUnload = true;
  };

  render() {
    return (
      <footer className="Footer">
        <div className="Footer--wrapper">
          <nav className="Footer--nav">
            <div className="Footer--logo-column">
              <Logo />
            </div>
            {sections.map((column, i) => (
              <div key={i} className="Footer--column">
                <h4 className="Footer--nav-header">{column.title}</h4>
                {column.links.map((link, j) => (
                  <a key={j} href={link.href} name={link.name} onClick={this.onClick}>
                    {link.text}
                  </a>
                ))}
              </div>
            ))}
          </nav>
          <div className="Footer--bottom-container">
            <a href="https://postmates.com" onClick={this.onClick}>
              ©{YEAR} Postmates Inc
            </a>
            <a href="https://postmates.com/legal/terms" onClick={this.onClick}>
              Terms
            </a>
            <a href="https://postmates.com/legal/privacy" onClick={this.onClick}>
              Privacy
            </a>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
