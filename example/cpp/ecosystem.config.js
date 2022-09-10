module.exports = {
  apps: [
    {
      name: "cygnus-td",
      script: "./build/td_example",
      exec_interpreter: "none",
      exec_mode: "fork_mode",
      instances: 1,
      autorestart: true,
      max_memory_restart: "2000M",
      watch: false,
      time: true
    }
  ]
};