import * as React from 'react';
import { css } from 'office-ui-fabric-react/lib/Utilities';
import * as SignalFieldStyles from './SignalField.scss';

export type SignalFieldMode = 'wide' | 'compact';

export interface ISignalFieldProps extends React.HTMLAttributes<HTMLSpanElement> {
  signalsFieldMode?: SignalFieldMode;
  before?: React.ReactNode | React.ReactNode[];
  after?: React.ReactNode | React.ReactNode[];
}

/**
 * Renders a field flanked by signals.
 * Pass `<Signal />` or related components in for the `before` and `after` fields.
 * Pass the main value as the children.
 */
export const SignalField: React.StatelessComponent<ISignalFieldProps> = (props: ISignalFieldProps): JSX.Element => {
  const { before, after, className, signalsFieldMode = 'compact', ...spanProps } = props;
  return (
    <span
      {...spanProps}
      className={css(
        SignalFieldStyles.signalField,
        {
          [SignalFieldStyles.wide]: signalsFieldMode === 'wide',
          [SignalFieldStyles.compact]: signalsFieldMode === 'compact'
        },
        className
      )}
    >
      <span className={SignalFieldStyles.signalFieldBefore}>{props.before}</span>
      <span className={SignalFieldStyles.signalFieldValue}>{props.children}</span>
      <span>{props.after}</span>
    </span>
  );
};
