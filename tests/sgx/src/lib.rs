#![no_std]

extern crate sgx_tstd as std;

#[macro_use]
extern crate log;

pub mod tests {
    use testing::generate_runner;

    generate_runner!();
}

mod filters;
mod macros;
