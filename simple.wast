;; simple.wasm
(module
  (import "console" "log" (func $log (param i32)))
  (func (export "e")
    i32.const 42
    call $log)
)