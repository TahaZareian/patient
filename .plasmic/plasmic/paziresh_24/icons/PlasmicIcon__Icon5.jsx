// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Icon5Icon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      className={classNames(
        "plasmic-default__svg",
        className,
        "w-5 mb-[0.1rem]"
      )}
      viewBox={"0 0 24 24"}
      height={"1em"}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M12.65 3.52L7.093 9.869c-.49.56-.734.839-.862 1.179-.128.34-.128.712-.128 1.455V17c0 1.886 0 2.828.586 3.414C7.276 21 8.22 21 10.104 21h4.945c1.47 0 2.204 0 2.742-.41.537-.411.73-1.12 1.117-2.538l.819-3c.632-2.32.949-3.48.348-4.266-.6-.786-1.802-.786-4.207-.786h-2.764l2.09-4.878A1.523 1.523 0 0012.65 3.52z"
        }
        fill={"currentColor"}
        fillOpacity={".16"}
      ></path>

      <path
        fillRule={"evenodd"}
        clipRule={"evenodd"}
        d={
          "M13.214 4.014a.772.772 0 011.291.813l-2.09 4.878a.75.75 0 00.69 1.045h2.762c1.227 0 2.064.002 2.673.09.591.086.811.233.94.401.128.168.212.42.139 1.012-.075.611-.293 1.419-.616 2.602l-.818 3c-.198.726-.33 1.207-.474 1.563-.136.336-.253.482-.375.575-.123.094-.294.168-.654.21-.38.046-.88.047-1.633.047h-4.944c-.965 0-1.612-.002-2.095-.067-.462-.062-.66-.169-.79-.3-.13-.13-.237-.327-.299-.788-.065-.483-.067-1.131-.067-2.095v-4.497c0-.798.012-1.008.08-1.191.07-.183.199-.348.725-.95l5.555-6.348zm.581-1.764c-.655 0-1.278.283-1.71.776L6.53 9.375l-.072.082c-.42.479-.751.857-.928 1.327-.177.47-.176.974-.176 1.61v4.657c0 .899 0 1.648.08 2.242.085.628.27 1.195.726 1.65.455.456 1.022.642 1.65.726.595.08 1.344.08 2.243.08h5.04c.697 0 1.286 0 1.765-.056.508-.06.973-.192 1.388-.509.415-.316.664-.73.856-1.206.18-.447.335-1.014.518-1.687l.012-.042.818-3 .016-.058c.303-1.11.552-2.024.642-2.757.093-.764.036-1.486-.437-2.104-.472-.619-1.153-.864-1.915-.975-.73-.106-1.677-.106-2.829-.106h-1.685l1.642-3.832a2.273 2.273 0 00-2.089-3.168zM3.855 11a.75.75 0 00-1.5 0v10a.75.75 0 001.5 0V11z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Icon5Icon;
/* prettier-ignore-end */
