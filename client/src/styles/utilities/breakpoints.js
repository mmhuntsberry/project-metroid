const breakpoints = [320, 480, 768, 1024, 1200, 1224, 1440];

const mq = breakpoints.map((bp) => `@media (min-width: ${bp}px)`);

export { mq };
