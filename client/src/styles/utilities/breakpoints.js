// xs 320
// s 480
// medium 768
// large 1024
// xlarge 1224
// max 1440

const breakpoints = [320, 480, 768, 1024, 1200, 1224, 1824];

const mq = breakpoints.map((bp) => `@media (min-width: ${bp}px)`);

export { mq };
