import React, { useState } from "react";
import Highlight, { defaultProps } from "prism-react-renderer";
import github from 'prism-react-renderer/themes/github';
import styled from 'styled-components';
import { invert, grayscale } from 'polished';
import copy from 'copy-text-to-clipboard';

const Copy = styled.span`
  color: ${props => grayscale(invert(props.color))};
  position: absolute;
  right: 15px;
  top: 15px;
  font-size: 12px;
  cursor: pointer;
  z-index: 100;
  opacity: 0;
  transition: all .2s ease;
`;

const Wrapper= styled.div`
  position: relative;
  &:hover > ${Copy} {
    opacity: 1;
  }
`;

export const styles = {
  fontFamily: 'SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
  lineHeight: '24px',
  fontSize: '14px',
  padding: '20px',
  borderRadius: '5px',
  overflow: 'auto'
};

export const Pre = ({ className, children }) => {
  const [ clip, setClip ] = useState(false);
  const type = className ? className.split('-')[1] : false;

  const handleClipboard = () => {
    copy(children.trim());
    setClip(true);
    setTimeout(() => setClip(false), 400);
  };

  return(
    <Highlight
      {...defaultProps}
      code={children.trim()}
      language={type}
      theme={github}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => {
        return(
          <Wrapper>
            <Copy onClick={handleClipboard} color={github.plain.backgroundColor}>{clip ? 'Copied' : 'Copy'}</Copy>
            <pre
              className={className}
              style={{...style, ...styles}}
            >
              {tokens.map((line, i) => (
                <div {...getLineProps({ line, key: i })}>
                  {line.map((token, key) => (
                    <span {...getTokenProps({ token, key })} />
                  ))}
                </div>
              ))}
            </pre>
          </Wrapper>
        )
      }}
    </Highlight>
  )
}