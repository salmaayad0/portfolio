export const fadeIn = (direction: 'up' | 'down') => {
    return {
        hidden:{
            opacity: 0,
            y: direction === 'up' ? 85 : -85
        },
        visible:{
            opacity: 1,
            y: 0
        }
    }
};

export const reveal = () => {
    return {
      hidden: {
        left: 0,
      },
      visible: {
        left: '100%',
      },
    }; 
};

export const scale = () => {
    return {
      hidden: {
        opacity: 0,
        scale: 0,
      },
      visible: {
        opacity: 1,
        scale: 1,
      },
    };
};
