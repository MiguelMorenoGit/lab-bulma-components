import React,{ Component } from 'react';
import classNames from 'classnames';

class CoolButton extends Component {
  render(){
    const a = this.props;
    const btnClass = classNames ({
      button: true,
      'is-small': a.isSmall,
      'is-black':a.isBlack, 
      'is-danger': a.isDanger,
      'is-succes': a.isSucces,
      'is-info': a.isInfo,
      'is-primary': a.isPrimary,
      'is-active': a.isActive,
      'is-centered': a.isCentered,
      'is-dark': a.isDark,
      'is-focused': a.isFocused,
      'is-grouped': a.isGrouped,
      'is-hovered': a.isHovered,
      'is-inverted': a.isInverted,
      'is-large': a.isLarge,
      'is-light': a.isLight,
      'is-link': a.isLink,
      'is-loading': a.isLoading,
      'is-medium': a.isMedium,
      'is-outlined' :a.isOutlined,
      'is-right': a.isRight,
      'is-rounded': a.isRounded,
      'is-selected': a.isSelected,
      'is-static': a.isStatic,
      'is-text': a.isText,
      'is-warning': a.isWarning,
      'is-white': a.isWhite,
    })
    return(
      <button className={btnClass}>{a.children}</button>
    )
  }
}


export default CoolButton;