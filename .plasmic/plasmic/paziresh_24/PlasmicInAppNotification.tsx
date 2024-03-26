// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: iDYgiKJB9Yi7CUB81stQBK
// Component: oB4wbfvJITFc

import * as React from "react";

import Head from "next/head";
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";

import {
  Flex as Flex__,
  MultiChoiceArg,
  PlasmicDataSourceContextProvider as PlasmicDataSourceContextProvider__,
  PlasmicIcon as PlasmicIcon__,
  PlasmicImg as PlasmicImg__,
  PlasmicLink as PlasmicLink__,
  PlasmicPageGuard as PlasmicPageGuard__,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  Stack as Stack__,
  StrictProps,
  Trans as Trans__,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  ensureGlobalVariants,
  generateOnMutateForSpec,
  generateStateOnChangeProp,
  generateStateOnChangePropForCodeComponents,
  generateStateValueProp,
  get as $stateGet,
  hasVariant,
  initializeCodeComponentStates,
  initializePlasmicStates,
  makeFragment,
  omit,
  pick,
  renderPlasmicSlot,
  set as $stateSet,
  useCurrentUser,
  useDollarState,
  usePlasmicTranslator,
  useTrigger,
  wrapWithClassName
} from "@plasmicapp/react-web";
import {
  DataCtxReader as DataCtxReader__,
  useDataEnv,
  useGlobalActions
} from "@plasmicapp/react-web/lib/host";

import {
  executePlasmicDataOp,
  usePlasmicDataOp,
  usePlasmicInvalidate
} from "@plasmicapp/react-web/lib/data-sources";

import { Popover } from "@plasmicpkgs/radix-ui";
import { Fetcher } from "@plasmicapp/react-web/lib/data-sources";

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_fragment_design_system_css from "../fragment_design_system/plasmic.module.css"; // plasmic-import: h9Dbk9ygddw7UVEq1NNhKi/projectcss
import projectcss from "./plasmic.module.css"; // plasmic-import: iDYgiKJB9Yi7CUB81stQBK/projectcss
import sty from "./PlasmicInAppNotification.module.css"; // plasmic-import: oB4wbfvJITFc/css

import NotificationIcon from "./icons/PlasmicIcon__Notification"; // plasmic-import: Vnellam4ltEV/icon
import ChevronLeftIcon from "./icons/PlasmicIcon__ChevronLeft"; // plasmic-import: JNS0DMK9Gxn8/icon
import ellipse1NPptSOeiydD from "./images/ellipse1.svg"; // plasmic-import: NPptS-oeiydD/picture

createPlasmicElementProxy;

export type PlasmicInAppNotification__VariantMembers = {};
export type PlasmicInAppNotification__VariantsArgs = {};
type VariantPropType = keyof PlasmicInAppNotification__VariantsArgs;
export const PlasmicInAppNotification__VariantProps =
  new Array<VariantPropType>();

export type PlasmicInAppNotification__ArgsType = {};
type ArgPropType = keyof PlasmicInAppNotification__ArgsType;
export const PlasmicInAppNotification__ArgProps = new Array<ArgPropType>();

export type PlasmicInAppNotification__OverridesType = {
  root?: Flex__<"div">;
  popoverCore?: Flex__<typeof Popover>;
  group6?: Flex__<"div">;
  vuesaxlinearnotification?: Flex__<"div">;
  vuesaxlinearnotification2?: Flex__<"div">;
  img?: Flex__<typeof PlasmicImg__>;
  freeBox?: Flex__<"div">;
  group7?: Flex__<"div">;
  group2?: Flex__<"div">;
  group8?: Flex__<"div">;
};

export interface DefaultInAppNotificationProps {
  className?: string;
}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicInAppNotification__RenderFunc(props: {
  variants: PlasmicInAppNotification__VariantsArgs;
  args: PlasmicInAppNotification__ArgsType;
  overrides: PlasmicInAppNotification__OverridesType;
  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const args = React.useMemo(() => Object.assign({}, props.args), [props.args]);

  const $props = {
    ...args,
    ...variants
  };

  const __nextRouter = useNextRouter();
  const $ctx = useDataEnv?.() || {};
  const refsRef = React.useRef({});
  const $refs = refsRef.current;

  const currentUser = useCurrentUser?.() || {};

  let [$queries, setDollarQueries] = React.useState<
    Record<string, ReturnType<typeof usePlasmicDataOp>>
  >({});
  const stateSpecs: Parameters<typeof useDollarState>[0] = React.useMemo(
    () => [
      {
        path: "popoverCore.open",
        type: "private",
        variableType: "boolean",
        initFunc: ({ $props, $state, $queries, $ctx }) => undefined
      }
    ],
    [$props, $ctx, $refs]
  );
  const $state = useDollarState(stateSpecs, {
    $props,
    $ctx,
    $queries: $queries,
    $refs
  });

  const new$Queries: Record<string, ReturnType<typeof usePlasmicDataOp>> = {
    callWorkhourSetting: usePlasmicDataOp(() => {
      return {
        sourceId: "xnoN49byzwVJkJ2gAhSas8",
        opId: "78ff7a28-96bd-4edc-a804-e39c45eef5c1",
        userArgs: {
          params: [localStorage.getItem("center_id") ?? "5532"]
        },
        cacheKey: `plasmic.$.78ff7a28-96bd-4edc-a804-e39c45eef5c1.$.`,
        invalidatedKeys: null,
        roleId: null
      };
    })
  };
  if (Object.keys(new$Queries).some(k => new$Queries[k] !== $queries[k])) {
    setDollarQueries(new$Queries);

    $queries = new$Queries;
  }

  return (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        plasmic_fragment_design_system_css.plasmic_tokens,
        sty.root
      )}
      dir={"rtl"}
    >
      <Popover
        data-plasmic-name={"popoverCore"}
        data-plasmic-override={overrides.popoverCore}
        className={classNames("__wab_instance", sty.popoverCore)}
        onOpenChange={generateStateOnChangeProp($state, [
          "popoverCore",
          "open"
        ])}
        open={generateStateValueProp($state, ["popoverCore", "open"])}
        overlay={
          <Stack__
            as={"div"}
            data-plasmic-name={"freeBox"}
            data-plasmic-override={overrides.freeBox}
            hasGap={true}
            className={classNames(projectcss.all, sty.freeBox)}
          >
            {(() => {
              try {
                return (
                  $queries.callWorkhourSetting.data.response.data.workhours
                    .length == 0
                );
              } catch (e) {
                if (
                  e instanceof TypeError ||
                  e?.plasmicType === "PlasmicUndefinedDataError"
                ) {
                  return true;
                }
                throw e;
              }
            })() ? (
              <Stack__
                as={"div"}
                data-plasmic-name={"group7"}
                data-plasmic-override={overrides.group7}
                hasGap={true}
                className={classNames(projectcss.all, sty.group7)}
                onClick={async event => {
                  const $steps = {};

                  $steps["goToSettingworkhours"] = true
                    ? (() => {
                        const actionArgs = {
                          destination: "/setting/workhours"
                        };
                        return (({ destination }) => {
                          if (
                            typeof destination === "string" &&
                            destination.startsWith("#")
                          ) {
                            document
                              .getElementById(destination.substr(1))
                              .scrollIntoView({ behavior: "smooth" });
                          } else {
                            __nextRouter?.push(destination);
                          }
                        })?.apply(null, [actionArgs]);
                      })()
                    : undefined;
                  if (
                    $steps["goToSettingworkhours"] != null &&
                    typeof $steps["goToSettingworkhours"] === "object" &&
                    typeof $steps["goToSettingworkhours"].then === "function"
                  ) {
                    $steps["goToSettingworkhours"] = await $steps[
                      "goToSettingworkhours"
                    ];
                  }
                }}
              >
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__iffOy
                  )}
                >
                  <React.Fragment>
                    {(() => {
                      try {
                        return `!نوبت‌دهی اینترنتی ${
                          localStorage.getItem("center_id") == "5532"
                            ? "ویزیت آنلاین"
                            : "مطب"
                        } غیرفعال است`;
                      } catch (e) {
                        if (
                          e instanceof TypeError ||
                          e?.plasmicType === "PlasmicUndefinedDataError"
                        ) {
                          return "\u0646\u0648\u0628\u062a\u200c\u062f\u0647\u06cc \u0627\u06cc\u0646\u062a\u0631\u0646\u062a\u06cc \u0645\u0637\u0628 \u063a\u06cc\u0631\u0641\u0639\u0627\u0644 \u0627\u0633\u062a!";
                        }
                        throw e;
                      }
                    })()}
                  </React.Fragment>
                </div>
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__w5DEc
                  )}
                >
                  <React.Fragment>
                    {(() => {
                      try {
                        return `.پزشک گرامی، برای ${
                          localStorage.getItem("center_id") == "5532"
                            ? "ویزیت آنلاین"
                            : "مطب"
                        } شما ساعت کاری تنظیم نشده است`;
                      } catch (e) {
                        if (
                          e instanceof TypeError ||
                          e?.plasmicType === "PlasmicUndefinedDataError"
                        ) {
                          return "\u067e\u0632\u0634\u06a9 \u06af\u0631\u0627\u0645\u06cc\u060c \u0628\u0631\u0627\u06cc \u0645\u0637\u0628 \u0634\u0645\u0627 \u0647\u06cc\u0686 \u0633\u0627\u0639\u062a \u06a9\u0627\u0631\u06cc \u062a\u0646\u0638\u06cc\u0645 \u0646\u0634\u062f\u0647 \u0627\u0633\u062a.";
                        }
                        throw e;
                      }
                    })()}
                  </React.Fragment>
                </div>
                <div
                  data-plasmic-name={"group2"}
                  data-plasmic-override={overrides.group2}
                  className={classNames(projectcss.all, sty.group2)}
                >
                  <ChevronLeftIcon
                    className={classNames(projectcss.all, sty.svg__fwW5D)}
                    role={"img"}
                  />

                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__vn7Yx
                    )}
                  >
                    {
                      "\u062a\u0646\u0638\u06cc\u0645 \u0633\u0627\u0639\u062a \u06a9\u0627\u0631\u06cc"
                    }
                  </div>
                </div>
              </Stack__>
            ) : null}
            {(() => {
              try {
                return (
                  $queries.callWorkhourSetting.data.response.data.workhours
                    .length != 0
                );
              } catch (e) {
                if (
                  e instanceof TypeError ||
                  e?.plasmicType === "PlasmicUndefinedDataError"
                ) {
                  return true;
                }
                throw e;
              }
            })() ? (
              <Stack__
                as={"div"}
                data-plasmic-name={"group8"}
                data-plasmic-override={overrides.group8}
                hasGap={true}
                className={classNames(projectcss.all, sty.group8)}
                onClick={async event => {
                  const $steps = {};

                  $steps["goToSettingworkhours"] = true
                    ? (() => {
                        const actionArgs = {
                          destination: "/setting/workhours"
                        };
                        return (({ destination }) => {
                          if (
                            typeof destination === "string" &&
                            destination.startsWith("#")
                          ) {
                            document
                              .getElementById(destination.substr(1))
                              .scrollIntoView({ behavior: "smooth" });
                          } else {
                            __nextRouter?.push(destination);
                          }
                        })?.apply(null, [actionArgs]);
                      })()
                    : undefined;
                  if (
                    $steps["goToSettingworkhours"] != null &&
                    typeof $steps["goToSettingworkhours"] === "object" &&
                    typeof $steps["goToSettingworkhours"].then === "function"
                  ) {
                    $steps["goToSettingworkhours"] = await $steps[
                      "goToSettingworkhours"
                    ];
                  }
                }}
              >
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text___3PHaM
                  )}
                >
                  {
                    "\u067e\u06cc\u0627\u0645\u06cc \u0628\u0631\u0627\u06cc \u0646\u0645\u0627\u06cc\u0634 \u0648\u062c\u0648\u062f \u0646\u062f\u0627\u0631\u062f."
                  }
                </div>
              </Stack__>
            ) : null}
          </Stack__>
        }
        themeResetClass={classNames(
          projectcss.root_reset,
          projectcss.plasmic_default_styles,
          projectcss.plasmic_mixins,
          projectcss.plasmic_tokens,
          plasmic_fragment_design_system_css.plasmic_tokens
        )}
      >
        <div
          data-plasmic-name={"group6"}
          data-plasmic-override={overrides.group6}
          className={classNames(projectcss.all, sty.group6)}
          onClick={async event => {
            const $steps = {};
          }}
        >
          <div
            data-plasmic-name={"vuesaxlinearnotification"}
            data-plasmic-override={overrides.vuesaxlinearnotification}
            className={classNames(projectcss.all, sty.vuesaxlinearnotification)}
          >
            <div
              data-plasmic-name={"vuesaxlinearnotification2"}
              data-plasmic-override={overrides.vuesaxlinearnotification2}
              className={classNames(
                projectcss.all,
                sty.vuesaxlinearnotification2
              )}
            >
              <NotificationIcon
                className={classNames(projectcss.all, sty.svg__hcxsy)}
                role={"img"}
              />
            </div>
          </div>
          {(() => {
            try {
              return (
                $queries.callWorkhourSetting.data.response.data.workhours
                  .length == 0
              );
            } catch (e) {
              if (
                e instanceof TypeError ||
                e?.plasmicType === "PlasmicUndefinedDataError"
              ) {
                return true;
              }
              throw e;
            }
          })() ? (
            <PlasmicImg__
              data-plasmic-name={"img"}
              data-plasmic-override={overrides.img}
              alt={""}
              className={classNames(sty.img)}
              displayHeight={"8px"}
              displayMaxHeight={"none"}
              displayMaxWidth={"100%"}
              displayMinHeight={"0"}
              displayMinWidth={"0"}
              displayWidth={"8px"}
              loading={"lazy"}
              src={{
                src: ellipse1NPptSOeiydD,
                fullWidth: 8,
                fullHeight: 8,
                aspectRatio: 1
              }}
            />
          ) : null}
        </div>
      </Popover>
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: [
    "root",
    "popoverCore",
    "group6",
    "vuesaxlinearnotification",
    "vuesaxlinearnotification2",
    "img",
    "freeBox",
    "group7",
    "group2",
    "group8"
  ],
  popoverCore: [
    "popoverCore",
    "group6",
    "vuesaxlinearnotification",
    "vuesaxlinearnotification2",
    "img",
    "freeBox",
    "group7",
    "group2",
    "group8"
  ],
  group6: [
    "group6",
    "vuesaxlinearnotification",
    "vuesaxlinearnotification2",
    "img"
  ],
  vuesaxlinearnotification: [
    "vuesaxlinearnotification",
    "vuesaxlinearnotification2"
  ],
  vuesaxlinearnotification2: ["vuesaxlinearnotification2"],
  img: ["img"],
  freeBox: ["freeBox", "group7", "group2", "group8"],
  group7: ["group7", "group2"],
  group2: ["group2"],
  group8: ["group8"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  popoverCore: typeof Popover;
  group6: "div";
  vuesaxlinearnotification: "div";
  vuesaxlinearnotification2: "div";
  img: typeof PlasmicImg__;
  freeBox: "div";
  group7: "div";
  group2: "div";
  group8: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicInAppNotification__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicInAppNotification__VariantsArgs;
    args?: PlasmicInAppNotification__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicInAppNotification__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicInAppNotification__ArgsType,
      ReservedPropsType
    > &
    /* Specify overrides for each element directly as props*/ Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    /* Specify props for the root element*/ Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: PlasmicDescendants[nodeName],
          internalArgPropNames: PlasmicInAppNotification__ArgProps,
          internalVariantPropNames: PlasmicInAppNotification__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicInAppNotification__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicInAppNotification";
  } else {
    func.displayName = `PlasmicInAppNotification.${nodeName}`;
  }
  return func;
}

export const PlasmicInAppNotification = Object.assign(
  // Top-level PlasmicInAppNotification renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    popoverCore: makeNodeComponent("popoverCore"),
    group6: makeNodeComponent("group6"),
    vuesaxlinearnotification: makeNodeComponent("vuesaxlinearnotification"),
    vuesaxlinearnotification2: makeNodeComponent("vuesaxlinearnotification2"),
    img: makeNodeComponent("img"),
    freeBox: makeNodeComponent("freeBox"),
    group7: makeNodeComponent("group7"),
    group2: makeNodeComponent("group2"),
    group8: makeNodeComponent("group8"),

    // Metadata about props expected for PlasmicInAppNotification
    internalVariantProps: PlasmicInAppNotification__VariantProps,
    internalArgProps: PlasmicInAppNotification__ArgProps
  }
);

export default PlasmicInAppNotification;
/* prettier-ignore-end */
