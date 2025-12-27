import { Variants, Transition } from 'framer-motion';

const transition: Transition = {
    duration: 0.5,
    ease: [0.16, 1, 0.3, 1] as [number, number, number, number]
};

export const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition
    }
};

export const fadeInLeft: Variants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
        opacity: 1,
        x: 0,
        transition
    }
};

export const staggerContainer: Variants = {
    hidden: { opacity: 1 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.1
        }
    }
};

export const hoverScale = {
    scale: 1.02,
    boxShadow: "0 10px 30px -10px rgba(0,0,0,0.1)",
    transition: {
        duration: 0.2,
        ease: [0.4, 0, 0.2, 1] as [number, number, number, number]
    }
};

export const immediate: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { duration: 0.3 }
    }
};
