import {
  useLocation,
  NavLink,
  Outlet,
  useSearchParams,
  Link,
} from "react-router-dom";

function QueryNavLink({ to, ...props }: { to: string }) {
  let location = useLocation();
  return <NavLink to={to + location.search} {...props} />;
}

const Cars = () => {
  return (
    <div className="flex h-full flex-1">
      <div className="flex-[1] bg-white">
        {Array.from({ length: 4 }).map((_, idx) => (
          <Link
            style={{ display: "block", margin: "1rem 0" }}
            to={`/cars/${idx}`}
            key={idx}
          >
            {idx}
          </Link>
        ))}
      </div>
      <div className="flex-[3]">
        <Outlet />
      </div>
    </div>
  );
};

export default Cars;
