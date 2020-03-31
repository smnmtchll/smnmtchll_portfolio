import { useRouter } from 'next/router';
import Link from 'next/link';

const ActiveLink = ({ children, ...props }) => {
  const router = useRouter();
  const child = React.Children.only(children);
  return (
    <Link {...props}>
      {React.cloneElement(child, {
        href: props.href,
        active: router.pathname === props.href,
      })}
    </Link>
  );
};

export default ActiveLink;
