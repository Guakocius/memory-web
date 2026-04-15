use serde::{Deserialize, Serialize};

#[derive(Serialize, Deserialize)]
pub struct MessageDto {
    pub text: String,
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn it_works() {
        let result = add(2, 2);
        assert_eq!(result, 4);
    }
}
