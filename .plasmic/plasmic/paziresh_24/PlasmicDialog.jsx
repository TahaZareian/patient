// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: iDYgiKJB9Yi7CUB81stQBK
// Component: 5NUpgw2K0nJD
import * as React from "react";
import { useRouter } from "next/router";
import {
  Stack as Stack__,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  ensureGlobalVariants,
  generateStateOnChangeProp,
  generateStateValueProp,
  hasVariant,
  renderPlasmicSlot,
  useCurrentUser,
  useDollarState
} from "@plasmicapp/react-web";
import { useDataEnv } from "@plasmicapp/react-web/lib/host";
import { Dialog } from "@plasmicpkgs/radix-ui";
import Button from "../../Button"; // plasmic-import: wRtWBmTexyYF/component
import { DialogContent } from "@plasmicpkgs/radix-ui";
import { DialogTitle } from "@plasmicpkgs/radix-ui";
import { DialogClose } from "@plasmicpkgs/radix-ui";
import { useScreenVariants as useScreenVariantsce5BTtZuA7Fm } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: ce5BTtZuA7fm/globalVariant
import "@plasmicapp/react-web/lib/plasmic.css";
import projectcss from "./plasmic_paziresh_24.module.css"; // plasmic-import: iDYgiKJB9Yi7CUB81stQBK/projectcss
import sty from "./PlasmicDialog.module.css"; // plasmic-import: 5NUpgw2K0nJD/css

createPlasmicElementProxy;

export const PlasmicDialog__VariantProps = new Array("noTrigger");

export const PlasmicDialog__ArgProps = new Array(
  "open",
  "onOpenChange",
  "body",
  "title",
  "trigger"
);

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicDialog__RenderFunc(props) {
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
  const stateSpecs = React.useMemo(
    () => [
      {
        path: "dialog.open",
        type: "writable",
        variableType: "boolean",
        valueProp: "open",
        onChangeProp: "onOpenChange"
      },
      {
        path: "noTrigger",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.noTrigger
      }
    ],

    [$props, $ctx, $refs]
  );
  const $state = useDollarState(stateSpecs, {
    $props,
    $ctx,
    $queries: {},
    $refs
  });
  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariantsce5BTtZuA7Fm()
  });
  return (
    <Dialog
      data-plasmic-name={"dialog"}
      data-plasmic-override={overrides.dialog}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        "__wab_instance",
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        sty.dialog,
        { [sty.dialognoTrigger]: hasVariant($state, "noTrigger", "noTrigger") }
      )}
      defaultOpen={true}
      onOpenChange={generateStateOnChangeProp($state, ["dialog", "open"])}
      open={generateStateValueProp($state, ["dialog", "open"])}
      overlayClassName={classNames({
        [sty["pcls_PUEumaomj7gs"]]: true,
        [sty["pcls_rHNhlZINyf8Z"]]: hasVariant(
          globalVariants,
          "screen",
          "mobileOnly"
        )
      })}
      themeResetClass={classNames(
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens
      )}
      triggerSlot={
        (hasVariant($state, "noTrigger", "noTrigger") ? false : true)
          ? renderPlasmicSlot({
              defaultContents: (
                <Button>
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__mtFns
                    )}
                  >
                    {"Show dialog"}
                  </div>
                </Button>
              ),

              value: args.trigger
            })
          : null
      }
    >
      <DialogContent
        data-plasmic-name={"dialogContent"}
        data-plasmic-override={overrides.dialogContent}
        className={classNames("__wab_instance", sty.dialogContent)}
        themeResetClass={classNames(
          projectcss.root_reset,
          projectcss.plasmic_default_styles,
          projectcss.plasmic_mixins,
          projectcss.plasmic_tokens
        )}
      >
        <Stack__
          as={"div"}
          hasGap={true}
          className={classNames(projectcss.all, sty.freeBox___4ZVcG)}
          dir={"rtl"}
        >
          <DialogTitle
            data-plasmic-name={"dialogTitle"}
            data-plasmic-override={overrides.dialogTitle}
            className={classNames("__wab_instance", sty.dialogTitle)}
          >
            <h5
              data-plasmic-name={"h5"}
              data-plasmic-override={overrides.h5}
              className={classNames(projectcss.all, projectcss.h5, sty.h5)}
            >
              {renderPlasmicSlot({
                defaultContents: "Dialog title",
                value: args.title,
                className: classNames(sty.slotTargetTitle)
              })}
            </h5>
          </DialogTitle>
        </Stack__>
        <div
          className={classNames(projectcss.all, sty.freeBox__sz00C)}
          dir={"rtl"}
        >
          {renderPlasmicSlot({
            defaultContents: (
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text___1Cja9
                )}
              >
                {"You can insert dialog body content here in this slot."}
              </div>
            ),

            value: args.body
          })}
        </div>
        <DialogClose
          data-plasmic-name={"dialogClose"}
          data-plasmic-override={overrides.dialogClose}
          className={classNames("__wab_instance", sty.dialogClose)}
        />
      </DialogContent>
    </Dialog>
  );
}

const PlasmicDescendants = {
  dialog: ["dialog", "dialogContent", "dialogTitle", "h5", "dialogClose"],
  dialogContent: ["dialogContent", "dialogTitle", "h5", "dialogClose"],
  dialogTitle: ["dialogTitle", "h5"],
  h5: ["h5"],
  dialogClose: ["dialogClose"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: PlasmicDescendants[nodeName],
          internalArgPropNames: PlasmicDialog__ArgProps,
          internalVariantPropNames: PlasmicDialog__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicDialog__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "dialog") {
    func.displayName = "PlasmicDialog";
  } else {
    func.displayName = `PlasmicDialog.${nodeName}`;
  }
  return func;
}

export const PlasmicDialog = Object.assign(
  // Top-level PlasmicDialog renders the root element
  makeNodeComponent("dialog"),
  {
    // Helper components rendering sub-elements
    dialogContent: makeNodeComponent("dialogContent"),
    dialogTitle: makeNodeComponent("dialogTitle"),
    h5: makeNodeComponent("h5"),
    dialogClose: makeNodeComponent("dialogClose"),
    // Metadata about props expected for PlasmicDialog
    internalVariantProps: PlasmicDialog__VariantProps,
    internalArgProps: PlasmicDialog__ArgProps
  }
);

export default PlasmicDialog;
/* prettier-ignore-end */
